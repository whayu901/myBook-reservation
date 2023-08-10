import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Root from './src/root';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      /**
       * Don't retry the failed requests.
       */
      retry: false,
      /**
       * Make data stale after 60.000ms (one minute).
       * Staled data will be replaced with new data from new requests.
       */
      staleTime: 1 * 60 * 1000,
    },
  },
});

const App = () => {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <Root />
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};

export default App;
