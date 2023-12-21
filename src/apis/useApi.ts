
import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios, { AxiosError } from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: false,
 headers:{
    'Accept': 'application/json',
    // 'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
 
 }
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    console.error('Axios Error:', error);
    return Promise.reject(error);
  }
);

export function useApiQuery<T>(key: string, endpoint: string) {
  return useQuery<T>(key, () => api.get(endpoint).then((res) => res.data));
}

export function useApiMutation<T, U>(endpoint: string) {
    const queryClient = useQueryClient();
  
    return useMutation<T, AxiosError, U>(
    (data) => api.post(endpoint, data).then((res)=>(res.data)),
 
      {
        onSuccess: () => {
          queryClient.invalidateQueries('user'); // Example: Invalidate 'user' query after mutation
        },
      }
    );
  }
