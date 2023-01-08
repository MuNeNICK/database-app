import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThreadsWhereInput } from './threads-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyThreadsArgs {

    @Field(() => ThreadsWhereInput, {nullable:true})
    @Type(() => ThreadsWhereInput)
    where?: ThreadsWhereInput;
}
