export const env = {
  apiUrl: (import.meta.env.VITE_API_URL as string | undefined) ?? 'http://localhost:4000/api',
  websocketUrl:
    (import.meta.env.VITE_WS_URL as string | undefined) ?? 'ws://localhost:4000/socket.io/?EIO=4&transport=websocket'
};
