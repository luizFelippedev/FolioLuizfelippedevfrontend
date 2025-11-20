import { env } from '@config/env';

const apiBase = (() => {
  try {
    return new URL(env.apiUrl);
  } catch {
    return new URL('http://localhost:4000/api');
  }
})();

const assetOrigin = apiBase.origin;

export const normalizeAssetUrl = (value?: string | null) => {
  if (!value) {
    return undefined;
  }

  try {
    return new URL(value, assetOrigin).toString();
  } catch {
    try {
      return new URL(`/uploads/${value.replace(/^\/+/, '')}`, assetOrigin).toString();
    } catch {
      return value ?? undefined;
    }
  }
};
