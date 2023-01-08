import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Threads } from 'src/@generated/prisma-nestjs-graphql/threads/threads.model'
import { DeleteOneThreadsArgs } from 'src/@generated/prisma-nestjs-graphql/threads/delete-one-threads.args';
import { ThreadsService } from 'src/events/events.service';
import { FindFirstThreadsArgs } from 'src/@generated/prisma-nestjs-graphql/threads/find-first-threads.args';
import { FindManyThreadsArgs } from 'src/@generated/prisma-nestjs-graphql/threads/find-many-threads.args';

@Resolver(() => Threads)
export class ThreadsResolver {
    constructor(
        private readonly threadsService: ThreadsService
    ) {}

    @Query(() => Threads)
    note(
        @Args() args: FindFirstThreadsArgs
    ) {
        return this.threadsService.findFirst(args)
    }

    @Query(() => [Threads])
    threads(
        @Args() args: FindManyThreadsArgs
    ) {
        return this.threadsService.findMany(args);
    }
}