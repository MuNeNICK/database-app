import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThreadsCreateInput } from './threads-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneThreadsArgs {

    @Field(() => ThreadsCreateInput, {nullable:false})
    @Type(() => ThreadsCreateInput)
    @ValidateNested()
    @Type(() => ThreadsCreateInput)
    data!: ThreadsCreateInput;
}
