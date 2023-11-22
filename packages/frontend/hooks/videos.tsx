import { useQuery } from '@tanstack/react-query';
import { apiService } from '../services/api';

export const useAllVideos = () => {
  return useQuery({ queryKey: ['videos'], queryFn: apiService.getVideos });
};
