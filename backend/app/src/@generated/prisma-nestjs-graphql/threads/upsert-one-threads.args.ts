import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThreadsWhereUniqueInput } from './threads-where-unique.input';
import { Type } from 'class-transformer';
import { ThreadsCreateInput } from './threads-create.input';
import { ThreadsUpdateInput } from './threads-update.input';

@ArgsType()
export class UpsertOneThreadsArgs {

    @Field(() => ThreadsWhereUniqueInput, {nullable:false})
    @Type(() => ThreadsWhereUniqueInput)
    where!: ThreadsWhereUniqueInput;

    @Field(() => ThreadsCreateInput, {nullable:false})
    @Type(() => ThreadsCreateInput)
    create!: ThreadsCreateInput;

    @Field(() => ThreadsUpdateInput, {nullable:false})
    @Type(() => ThreadsUpdateInput)
    update!: ThreadsUpdateInput;
}
