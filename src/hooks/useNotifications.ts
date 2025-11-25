import { useEffect, useRef, useState } from 'react';
import { io, type Socket } from 'socket.io-client';

import { env } from '@config/env';

export interface NotificationMessage {
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  timestamp: number;
}

export const useNotifications = (channel = 'admin-alerts') => {
  const [messages, setMessages] = useState<NotificationMessage[]>([]);
  const [connected, setConnected] = useState(false);
  const [stats, setStats] = useState<{ activeUsers: number }>({ activeUsers: 0 });
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    const socket = io(`${env.websocketBase}/notifications`, {
      transports: ['websocket', 'polling'],
      withCredentials: true
    });
    socketRef.current = socket;

    const handleMessage = (payload: NotificationMessage) => {
      setMessages((prev) => [payload, ...prev].slice(0, 25));
    };

    socket.on('connect', () => {
      setConnected(true);
      socket.emit('notifications:subscribe', [channel]);
    });
    socket.on('disconnect', () => setConnected(false));
    socket.on('notifications:message', handleMessage);
    socket.on('notifications:stats', (payload: { activeUsers: number }) => setStats(payload));

    return () => {
      socket.emit('notifications:unsubscribe', [channel]);
      socket.off('notifications:message', handleMessage);
      socket.disconnect();
    };
  }, [channel]);

  return {
    messages,
    connected,
    stats
  };
};
