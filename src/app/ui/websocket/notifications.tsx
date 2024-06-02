'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import io from 'socket.io-client';
import SessionProvider from 'next-auth';

export default function Notification() {
  const { data: session, status } = useSession();
  console.log('[Notification] session:', session);
  console.log('[Notification] status:', status);
  const loading = status === 'loading';

  useEffect(() => {
    console.log('[Notification] useEffect Session:', session);
    console.log('[Notification] useEffect Loading:', loading);
    if (!loading && session) {
      const token = session;

      const socket = io('ws://localhost:8000/ws/notifications', {
        extraHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });

      socket.on('connect', () => {
        console.log('connected to websocket');
      });

      socket.on('message', (data) => {
        console.log(data);
      });

      socket.on('disconnect', () => {
        console.log('disconnected from websocket');
      });

      return () => {
        socket.close();
      };
    }
  }, [loading, session]);

  if (loading) return <div>Loading...</div>;

  if (!session) {
    return <div>You are not authenticated. Please log in.</div>;
  }

  return (
    <div>
      <h1>Hello, Next.js with Websockets!</h1>
    </div>
  );
}
