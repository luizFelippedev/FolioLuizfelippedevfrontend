import axios from 'axios';

import { env } from '@config/env';

export const api = axios.create({
  baseURL: env.apiUrl,
  withCredentials: true
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.data?.message) {
      console.error(error.response.data.message);
    }
    return Promise.reject(error);
  }
);

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}
