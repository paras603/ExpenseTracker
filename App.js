import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { TransactionProvider } from './context/TransactionContext';

export default function App() {
  return (
    <TransactionProvider>
      <AppNavigator />
    </TransactionProvider>
  );
}
