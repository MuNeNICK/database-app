import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThreadsWhereInput } from './threads-where.input';
import { Type } from 'class-transformer';
import { ThreadsOrderByWithRelationInput } from './threads-order-by-with-relation.input';
import { ThreadsWhereUniqueInput } from './threads-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ThreadsScalarFieldEnum } from './threads-scalar-field.enum';

@ArgsType()
export class FindFirstThreadsArgs {

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

    @Field(() => [ThreadsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ThreadsScalarFieldEnum>;
}
