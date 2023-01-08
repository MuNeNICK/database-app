import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThreadsCreateManyInput } from './threads-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyThreadsArgs {

    @Field(() => [ThreadsCreateManyInput], {nullable:false})
    @Type(() => ThreadsCreateManyInput)
    data!: Array<ThreadsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
