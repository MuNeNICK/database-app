import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
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
  wsClients=[];

  handleConnection(client: any) {
    this.wsClients.push(client);
  }

  @SubscribeMessage('chat')
  chat(@MessageBody() data: any) {
    console.log(data);
    this.broadcast('chat', data.message);
  }

  @SubscribeMessage('testing')
  emitLoginMessage(@MessageBody() data: any) {
    console.log(data);
    this.broadcast('login', data + 'さんがログインしました。');
  }

  private broadcast(event, message: string) {
    const broadCastMessage = message;
    for (let c of this.wsClients) {
      c.emit(event, broadCastMessage);
    }
  }

}