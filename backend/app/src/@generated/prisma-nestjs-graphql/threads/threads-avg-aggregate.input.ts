import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ThreadsAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;
}
