import { registerEnumType } from '@nestjs/graphql';

export enum ThreadsScalarFieldEnum {
    id = "id",
    sender = "sender",
    message = "message",
    date = "date",
    roomname = "roomname"
}


registerEnumType(ThreadsScalarFieldEnum, { name: 'ThreadsScalarFieldEnum', description: undefined })
