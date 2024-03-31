import React from 'react';
import './App.css';
import Header from './components/Header';
import Lists from './components/Lists';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Header />
        <Lists />
      </div>
    </QueryClientProvider>

  );
}

export default App;
