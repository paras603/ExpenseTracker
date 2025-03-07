import React, { createContext, useState, useContext } from 'react';

// context for managing transactions
const TransactionContext = createContext();

// provider component
export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([
    { id: '1', date: '2025-03-07', amount: 50, category: 'Shopping', type: 'Debit', description: 'Bought groceries' },
    { id: '2', date: '2025-03-06', amount: 100, category: 'Travel', type: 'Credit', description: 'Refund from Uber' },
  ]);

  // add a new transaction
  const addTransaction = (transaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, transaction]);
  };

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};

// Custom hook to use the TransactionContext
export const useTransactions = () => useContext(TransactionContext);
