import { createClient } from 'urql';

export const client = createClient({
  url: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:54321/graphql/v1',
  fetchOptions: () => {
    const token = process.env.NEXT_PUBLIC_ANON_KEY;
    return {
      headers: {
        authorization: token ? `Bearer ${token}` : '',
        apikey: token ? token : '',
      },
    };
  },
});
