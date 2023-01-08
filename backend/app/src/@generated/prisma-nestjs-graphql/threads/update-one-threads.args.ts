import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThreadsUpdateInput } from './threads-update.input';
import { Type } from 'class-transformer';
import { ThreadsWhereUniqueInput } from './threads-where-unique.input';

@ArgsType()
export class UpdateOneThreadsArgs {

    @Field(() => ThreadsUpdateInput, {nullable:false})
    @Type(() => ThreadsUpdateInput)
    data!: ThreadsUpdateInput;

    @Field(() => ThreadsWhereUniqueInput, {nullable:false})
    @Type(() => ThreadsWhereUniqueInput)
    where!: ThreadsWhereUniqueInput;
}
