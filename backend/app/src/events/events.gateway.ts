import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  handleConnection(client) {
    client.on('join', (room) => {
      client.join(room)
    });
  }

  @SubscribeMessage('message')
  message(@MessageBody() data: any): void {    
    console.log(data)
    const roomname = data['roomname'];
    this.server.to(roomname).emit('message', data)
  }

}