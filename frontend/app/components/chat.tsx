import io from 'socket.io-client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import Query_Threads from '../graphql/threads.query';
import { gql } from '@apollo/client';

const url = process.env.NEXT_PUBLIC_BACKEND_URL;
const socket = io(url);

export default function Chat() {
    const [senderName, setSenderName] = useState('');
    const [message, setMessage] = useState('');
    const [receivedMessages, setReceivedMessages] = useState<{ sender: string; message: string; date: Date, roomname: string }[]>([]);

    const router = useRouter();
    const pathname = router.asPath.split('/').pop();

    useEffect(() => {
        socket.on('connect', () => {
            console.log('connected to the server');
            socket.emit('join', pathname)
        });

        socket.on('message', (data) => {
            setReceivedMessages((prevMessages) => [data, ...prevMessages]);
        });

        return () => {
            socket.off('connect');
            socket.off('message');
        };
    }, []);

    
    const THREADS_QUERY = Query_Threads(pathname)
    const { loading, error, data } = useQuery(gql(THREADS_QUERY)) || { loading: false, error: null, data: null };
    if (loading) return <p>'Loading...'</p>;
    if (error) return <p>`Error! ${error.message}`</p>;

    const reversedThreads = data.threads.slice().reverse();

    const handleSubmit = (event) => {
        event.preventDefault();
        const date = new Date();
        const formattedDateTime = date.toLocaleString("ja-JP", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
        socket.emit('message', { sender: senderName, message: message, date: formattedDateTime, roomname: pathname });
        setMessage('');
    }

    return (
        <div className='flex justify-center xl:grid grid-cols-4 gap-4'>
            <div className="container mx-auto p-4 bg-white rounded-lg overflow-hidden relative bottom-10 max-w-4xl col-span-3 shadow">
                <h2 className='p-4 -mt-2'>????????????</h2>
                <div className="messages">
                    {receivedMessages.map(({ sender, message, date }, index) => (
                        <div key={index} className="p-4 border-b">
                            <div className="font-bold text-xl">{sender}</div>
                            <div className="text-sm">{date.toLocaleString()}</div><br></br>
                            <div className="test-base">{message}</div>
                        </div>
                    ))}
                    {reversedThreads.map(({ sender, message, date }, index) => (
                        <div key={index} className="p-4 border-b">
                            <div className="font-bold text-xl">{sender}</div>
                            <div className="text-sm">{date.toLocaleString()}</div><br></br>
                            <div className="test-base">{message}</div>
                        </div>
                    ))}
                </div>
                <form onSubmit={handleSubmit} className="input-form flex py-4 border-t border-gray-400">
                    <input
                        className="form-input rounded-lg mr-2 py-2 px-4 block w-1/4 leading-5 bg-gray-100 placeholder-gray-500 focus:outline-none focus:bg-white focus:placeholder-gray-400"
                        type="text"
                        value={senderName}
                        onChange={(event) => setSenderName(event.target.value)}
                        placeholder="??????"
                        required
                    />
                    <input
                        className="form-input rounded-l-lg rounded-r-none py-2 px-4 block w-full leading-5 bg-gray-100 placeholder-gray-500 focus:outline-none focus:bg-white focus:placeholder-gray-400"
                        type="text"
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        placeholder="??????"
                        required
                    />
                    <button className="form-button rounded-r-lg py-2 px-4 leading-5 font-medium text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-800" type="submit">
                        ??????
                    </button>
                </form>
            </div>
        </div>
    );
}