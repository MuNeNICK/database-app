import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Threads } from 'src/@generated/prisma-nestjs-graphql/threads/threads.model'
import { FindFirstThreadsArgs } from 'src/@generated/prisma-nestjs-graphql/threads/find-first-threads.args';
import { FindUniqueThreadsArgs } from 'src/@generated/prisma-nestjs-graphql/threads/find-unique-threads.args';
import { FindManyThreadsArgs } from 'src/@generated/prisma-nestjs-graphql/threads/find-many-threads.args';

@Injectable()
export class ThreadsService {
    constructor(
        private readonly prisma: PrismaService
    ) {}

    async findFirst(args: FindFirstThreadsArgs): Promise<Threads | null> {
        return this.prisma.threads.findFirst(args);
    }

    async findUnique(args: FindUniqueThreadsArgs): Promise<Threads | null> {
        return this.prisma.threads.findUnique(args);
    }

    async findMany(args: FindManyThreadsArgs): Promise<Threads[] | null> {
        return this.prisma.threads.findMany(args);
    }

}