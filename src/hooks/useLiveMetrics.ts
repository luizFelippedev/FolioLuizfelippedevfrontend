import { useEffect, useRef, useState } from 'react';
import { io, type Socket } from 'socket.io-client';

import { env } from '@config/env';

type MetricMap = Record<string, { stars?: number; views?: number; likes?: number }>;

export const useLiveMetrics = () => {
  const [projectMetrics, setProjectMetrics] = useState<MetricMap>({});
  const [postMetrics, setPostMetrics] = useState<MetricMap>({});
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    const base = env.websocketUrl
      ? env.websocketUrl.replace(/\/?socket\.io.*$/, '')
      : env.apiUrl.replace(/\/api$/, '');
    const socket = io(`${base}/notifications`, {
      transports: ['websocket'],
      withCredentials: true
    });
    socketRef.current = socket;

    socket.on('connect', () => {
      socket.emit('notifications:subscribe', ['admin-alerts']);
    });

    socket.on('metrics:update', (payload: any) => {
      const nextProjects: MetricMap = {};
      const nextPosts: MetricMap = {};
      if (Array.isArray(payload?.projects)) {
        payload.projects.forEach((item: any) => {
          if (item?.slug) nextProjects[item.slug] = item.metrics ?? {};
        });
      }
      if (Array.isArray(payload?.blogPosts)) {
        payload.blogPosts.forEach((item: any) => {
          if (item?.slug) nextPosts[item.slug] = item.metrics ?? {};
        });
      }
      if (Object.keys(nextProjects).length) setProjectMetrics(nextProjects);
      if (Object.keys(nextPosts).length) setPostMetrics(nextPosts);
    });

    return () => {
      socket.emit('notifications:unsubscribe', ['admin-alerts']);
      socket.disconnect();
    };
  }, []);

  return { projectMetrics, postMetrics };
};
