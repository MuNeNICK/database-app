import io from 'socket.io-client';
import { useState, useEffect } from 'react';

const url = process.env.NEXT_PUBLIC_BACKEND_URL;
const socket = io(url);

export default function MyComponent() {
  const [message, setMessage] = useState('');
  const [receivedMessages, setReceivedMessages] = useState<string[]>([]);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('connected to the server');
    });

    socket.on('message', (data) => {
      setReceivedMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socket.off('connect');
      socket.off('message');
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    socket.emit('message', message);
    setMessage('');
  }

  return (
    <>
      {receivedMessages.map((receivedMessage, index) => (
        <div key={index}>{receivedMessage}</div>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
}