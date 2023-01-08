import { registerEnumType } from '@nestjs/graphql';

export enum ThreadsScalarFieldEnum {
    id = "id",
    name = "name",
    message = "message",
    roomname = "roomname"
}


registerEnumType(ThreadsScalarFieldEnum, { name: 'ThreadsScalarFieldEnum', description: undefined })
