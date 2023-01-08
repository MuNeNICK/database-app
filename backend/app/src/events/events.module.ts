import { Module } from '@nestjs/common';
import { EventsGateway } from './events.gateway';
import { PrismaService } from 'src/prisma.service';
import { ThreadsResolver } from './events.resolver';
import { ThreadsService } from './events.service';

@Module({
  providers: [EventsGateway, PrismaService, ThreadsResolver, ThreadsService ]
})
export class EventsModule {}
