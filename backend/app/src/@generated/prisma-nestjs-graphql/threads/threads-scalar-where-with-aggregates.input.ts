import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class ThreadsScalarWhereWithAggregatesInput {

    @Field(() => [ThreadsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ThreadsScalarWhereWithAggregatesInput>;

    @Field(() => [ThreadsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ThreadsScalarWhereWithAggregatesInput>;

    @Field(() => [ThreadsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ThreadsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    sender?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    message?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    date?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    roomname?: StringNullableWithAggregatesFilter;
}
