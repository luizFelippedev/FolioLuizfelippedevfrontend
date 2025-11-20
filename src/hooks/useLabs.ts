import { useQuery } from '@tanstack/react-query';

import { api } from '@lib/api';

export interface Lab {
  _id: string;
  title: string;
  slug: string;
  description: string;
  status?: string;
  icon?: string;
  gradient?: string;
  ctaUrl?: string;
  active: boolean;
  beta?: boolean;
}

interface LabsResponse {
  success: boolean;
  data: Lab[];
}

export const useLabs = () => {
  return useQuery<LabsResponse>({
    queryKey: ['labs', 'public'],
    queryFn: async () => {
      const response = await api.get('/labs');
      return response.data;
    },
    staleTime: 1000 * 60 * 5
  });
};
