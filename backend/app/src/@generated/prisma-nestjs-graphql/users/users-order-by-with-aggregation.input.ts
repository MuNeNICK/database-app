import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UsersCountOrderByAggregateInput } from './users-count-order-by-aggregate.input';
import { UsersMaxOrderByAggregateInput } from './users-max-order-by-aggregate.input';
import { UsersMinOrderByAggregateInput } from './users-min-order-by-aggregate.input';

@InputType()
export class UsersOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    profileid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    profile?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    history?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    accessToken?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    refreshToken?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deleteToken?: keyof typeof SortOrder;

    @Field(() => UsersCountOrderByAggregateInput, {nullable:true})
    _count?: UsersCountOrderByAggregateInput;

    @Field(() => UsersMaxOrderByAggregateInput, {nullable:true})
    _max?: UsersMaxOrderByAggregateInput;

    @Field(() => UsersMinOrderByAggregateInput, {nullable:true})
    _min?: UsersMinOrderByAggregateInput;
}
