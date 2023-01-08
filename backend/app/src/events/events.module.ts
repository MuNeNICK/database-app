import { Module } from '@nestjs/common';
import { EventsGateway } from './events.gateway';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [EventsGateway, PrismaService]
})
export class EventsModule {}
