// We can pull out anything from the global context through using the useContext hook
import React, { useContext } from 'react';
import { Transaction } from './Transaction';
// Pulling global state in
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {/* Mapping through the transactions array in the global state, outputting each transaction */}
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
        
      </ul>
    </>
  )
}
