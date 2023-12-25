
import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios, { AxiosError,AxiosHeaders } from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.29.155:8080/',
  withCredentials: false,
 headers:{
    'Accept': 'application/json',
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

api.interceptors.request.use(
  (config)=>{
    const token = localStorage.getItem('token');
    config.headers = config.headers ?? {} as AxiosHeaders;
    // Check if the request is for login or forgot password
    if (config?.url?.includes('/login') || config?.url?.includes('/forgot-password')) {
      // Exclude token for login or forgot password requests
      return config;
    }
    // for other requests use token from config in authentication
    if(token){
     
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }
)

export function useApiQuery<T>(key: string, endpoint: string) {
  return useQuery<T>(key, async () => {
    const response = await api.get(endpoint);
    const contentType = response.headers['content-type'];

    if (contentType === 'text/plain') {
      // If the content type is 'text/plain', decode the Base64 string
      const base64Image = response.data;
      const byteValues = atob(base64Image);
      const arrayBuffer = new Uint8Array(byteValues.length);
      for (let i = 0; i < byteValues.length; i++) {
        arrayBuffer[i] = byteValues.charCodeAt(i);
      }

      // Replace the response data with a Blob
      response.data = new Blob([arrayBuffer], { type: 'image/jpeg' });
    }

    return response.data;
  });
}

export function useApiMutation<T, U>(endpoint: string) {
    const queryClient = useQueryClient();
  
    return useMutation<T, AxiosError, U>(
    async(data) => await api.post(endpoint, data).then((res)=>(res.data)),
 
      {
        onSuccess: () => {
          queryClient.invalidateQueries('user'); // Example: Invalidate 'user' query after mutation
        },
      }
    );
  }
