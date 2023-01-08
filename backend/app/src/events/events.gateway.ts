import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { PrismaService } from 'src/prisma.service';
import { Threads } from 'src/@generated/prisma-nestjs-graphql/threads/threads.model';
import { CreateOneThreadsArgs } from 'src/@generated/prisma-nestjs-graphql/threads/create-one-threads.args';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class EventsGateway {
  constructor(
    private readonly prisma: PrismaService
) {}

  @WebSocketServer()
  server: Server;

  handleConnection(client) {
    client.on('join', (room) => {
      client.join(room)
    });
  }

  @SubscribeMessage('message')
  async message(@MessageBody() receiveData: CreateOneThreadsArgs ): Promise<Threads | null> {    
    console.log(receiveData)
    const sender = receiveData['sender'];
    const message = receiveData['message'];
    const date = receiveData['date'];
    const roomname = receiveData['roomname'];

    this.server.to(roomname).emit('message', receiveData)

    return await this.prisma.threads.create({
      data: {
        sender: sender,
        message: message,
        date: date,
        roomname: roomname,
      },
    });
  }

}