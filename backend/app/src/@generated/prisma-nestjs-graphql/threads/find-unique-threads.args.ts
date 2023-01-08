import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThreadsWhereUniqueInput } from './threads-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueThreadsArgs {

    @Field(() => ThreadsWhereUniqueInput, {nullable:false})
    @Type(() => ThreadsWhereUniqueInput)
    where!: ThreadsWhereUniqueInput;
}
