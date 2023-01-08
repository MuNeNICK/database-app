import { gql } from '@apollo/client';

export default function Query_Threads(roomname: string) {
    const THREADS_QUERY = `
        query{
            threads(
                where: {
                    roomname: {
                        equals: "${roomname}"
                    }
                }
            ){
            id,
            sender,
            message,
            date,
            roomname
            }
        }
    `;
    return THREADS_QUERY
}
