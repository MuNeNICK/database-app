import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThreadsUpdateManyMutationInput } from './threads-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ThreadsWhereInput } from './threads-where.input';

@ArgsType()
export class UpdateManyThreadsArgs {

    @Field(() => ThreadsUpdateManyMutationInput, {nullable:false})
    @Type(() => ThreadsUpdateManyMutationInput)
    data!: ThreadsUpdateManyMutationInput;

    @Field(() => ThreadsWhereInput, {nullable:true})
    @Type(() => ThreadsWhereInput)
    where?: ThreadsWhereInput;
}
