import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ThreadsMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    sender?: true;

    @Field(() => Boolean, {nullable:true})
    message?: true;

    @Field(() => Boolean, {nullable:true})
    date?: true;

    @Field(() => Boolean, {nullable:true})
    roomname?: true;
}
