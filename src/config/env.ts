const stripSocketPath = (value: string) => value.replace(/\/?socket\.io.*$/, '').replace(/\/?$/, '');

const apiUrl = (import.meta.env.VITE_API_URL as string | undefined) ?? 'http://localhost:4000/api';

const deriveWebsocketBase = () => {
  const fromEnv = import.meta.env.VITE_WS_URL as string | undefined;
  if (fromEnv) return stripSocketPath(fromEnv);

  try {
    const api = new URL(apiUrl);
    const isSecure = api.protocol === 'https:';
    api.protocol = isSecure ? 'wss:' : 'ws:';
    api.pathname = api.pathname.replace(/\/api\/?$/, '');
    api.search = '';
    api.hash = '';
    return stripSocketPath(api.toString());
  } catch {
    return 'ws://localhost:4000';
  }
};

export const env = {
  apiUrl,
  websocketBase: deriveWebsocketBase()
};
