import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default queryClient;

const fetchData = async () => {
  const response = await fetch('your-api-endpoint');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
