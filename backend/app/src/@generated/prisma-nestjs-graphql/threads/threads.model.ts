import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class Threads {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    sender!: string | null;

    @Field(() => String, {nullable:true})
    message!: string | null;

    @Field(() => String, {nullable:true})
    date!: string | null;

    @Field(() => String, {nullable:true})
    roomname!: string | null;
}
