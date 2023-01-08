import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThreadsWhereInput } from './threads-where.input';
import { Type } from 'class-transformer';
import { ThreadsOrderByWithAggregationInput } from './threads-order-by-with-aggregation.input';
import { ThreadsScalarFieldEnum } from './threads-scalar-field.enum';
import { ThreadsScalarWhereWithAggregatesInput } from './threads-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ThreadsCountAggregateInput } from './threads-count-aggregate.input';
import { ThreadsMinAggregateInput } from './threads-min-aggregate.input';
import { ThreadsMaxAggregateInput } from './threads-max-aggregate.input';

@ArgsType()
export class ThreadsGroupByArgs {

    @Field(() => ThreadsWhereInput, {nullable:true})
    @Type(() => ThreadsWhereInput)
    where?: ThreadsWhereInput;

    @Field(() => [ThreadsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ThreadsOrderByWithAggregationInput>;

    @Field(() => [ThreadsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ThreadsScalarFieldEnum>;

    @Field(() => ThreadsScalarWhereWithAggregatesInput, {nullable:true})
    having?: ThreadsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ThreadsCountAggregateInput, {nullable:true})
    _count?: ThreadsCountAggregateInput;

    @Field(() => ThreadsMinAggregateInput, {nullable:true})
    _min?: ThreadsMinAggregateInput;

    @Field(() => ThreadsMaxAggregateInput, {nullable:true})
    _max?: ThreadsMaxAggregateInput;
}
