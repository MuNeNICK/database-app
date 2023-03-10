import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ThreadsWhereInput {

    @Field(() => [ThreadsWhereInput], {nullable:true})
    AND?: Array<ThreadsWhereInput>;

    @Field(() => [ThreadsWhereInput], {nullable:true})
    OR?: Array<ThreadsWhereInput>;

    @Field(() => [ThreadsWhereInput], {nullable:true})
    NOT?: Array<ThreadsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    sender?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    message?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    date?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    roomname?: StringNullableFilter;
}
