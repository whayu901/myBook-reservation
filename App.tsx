import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Root from './src/root';
import { GlobalProvider } from './src/shared/context/GlobalStateContext';

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
    <GlobalProvider>
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <GestureHandlerRootView className="flex-1">
            <BottomSheetModalProvider>
              <Root />
            </BottomSheetModalProvider>
          </GestureHandlerRootView>
        </QueryClientProvider>
      </SafeAreaProvider>
    </GlobalProvider>
  );
};

export default App;
