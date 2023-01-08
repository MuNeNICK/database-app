import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ThreadsCountAggregate } from './threads-count-aggregate.output';
import { ThreadsMinAggregate } from './threads-min-aggregate.output';
import { ThreadsMaxAggregate } from './threads-max-aggregate.output';

@ObjectType()
export class ThreadsGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    sender?: string;

    @Field(() => String, {nullable:true})
    message?: string;

    @Field(() => String, {nullable:true})
    date?: string;

    @Field(() => String, {nullable:true})
    roomname?: string;

    @Field(() => ThreadsCountAggregate, {nullable:true})
    _count?: ThreadsCountAggregate;

    @Field(() => ThreadsMinAggregate, {nullable:true})
    _min?: ThreadsMinAggregate;

    @Field(() => ThreadsMaxAggregate, {nullable:true})
    _max?: ThreadsMaxAggregate;
}
