import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThreadsWhereInput } from './threads-where.input';
import { Type } from 'class-transformer';
import { ThreadsOrderByWithRelationInput } from './threads-order-by-with-relation.input';
import { ThreadsWhereUniqueInput } from './threads-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ThreadsCountAggregateInput } from './threads-count-aggregate.input';
import { ThreadsAvgAggregateInput } from './threads-avg-aggregate.input';
import { ThreadsSumAggregateInput } from './threads-sum-aggregate.input';
import { ThreadsMinAggregateInput } from './threads-min-aggregate.input';
import { ThreadsMaxAggregateInput } from './threads-max-aggregate.input';

@ArgsType()
export class ThreadsAggregateArgs {

    @Field(() => ThreadsWhereInput, {nullable:true})
    @Type(() => ThreadsWhereInput)
    where?: ThreadsWhereInput;

    @Field(() => [ThreadsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ThreadsOrderByWithRelationInput>;

    @Field(() => ThreadsWhereUniqueInput, {nullable:true})
    cursor?: ThreadsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ThreadsCountAggregateInput, {nullable:true})
    _count?: ThreadsCountAggregateInput;

    @Field(() => ThreadsAvgAggregateInput, {nullable:true})
    _avg?: ThreadsAvgAggregateInput;

    @Field(() => ThreadsSumAggregateInput, {nullable:true})
    _sum?: ThreadsSumAggregateInput;

    @Field(() => ThreadsMinAggregateInput, {nullable:true})
    _min?: ThreadsMinAggregateInput;

    @Field(() => ThreadsMaxAggregateInput, {nullable:true})
    _max?: ThreadsMaxAggregateInput;
}
