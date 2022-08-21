import { createClient, dedupExchange, cacheExchange, fetchExchange } from 'urql';
import { refocusExchange } from '@urql/exchange-refocus';

export const client = createClient({
  url: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:54321/graphql/v1',
  // @ts-ignore
  exchanges: [dedupExchange, refocusExchange(), cacheExchange, fetchExchange],
  requestPolicy: 'cache-first',
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
