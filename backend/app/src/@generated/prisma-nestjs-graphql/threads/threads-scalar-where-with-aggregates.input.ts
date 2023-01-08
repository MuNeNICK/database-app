import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class ThreadsScalarWhereWithAggregatesInput {

    @Field(() => [ThreadsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ThreadsScalarWhereWithAggregatesInput>;

    @Field(() => [ThreadsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ThreadsScalarWhereWithAggregatesInput>;

    @Field(() => [ThreadsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ThreadsScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: UuidWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    name?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    message?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    roomname?: StringNullableWithAggregatesFilter;
}
