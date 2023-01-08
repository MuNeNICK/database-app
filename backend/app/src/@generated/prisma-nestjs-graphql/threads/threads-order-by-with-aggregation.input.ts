import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ThreadsCountOrderByAggregateInput } from './threads-count-order-by-aggregate.input';
import { ThreadsMaxOrderByAggregateInput } from './threads-max-order-by-aggregate.input';
import { ThreadsMinOrderByAggregateInput } from './threads-min-order-by-aggregate.input';

@InputType()
export class ThreadsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sender?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    message?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    roomname?: keyof typeof SortOrder;

    @Field(() => ThreadsCountOrderByAggregateInput, {nullable:true})
    _count?: ThreadsCountOrderByAggregateInput;

    @Field(() => ThreadsMaxOrderByAggregateInput, {nullable:true})
    _max?: ThreadsMaxOrderByAggregateInput;

    @Field(() => ThreadsMinOrderByAggregateInput, {nullable:true})
    _min?: ThreadsMinOrderByAggregateInput;
}
