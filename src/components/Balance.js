import React, { useContext } from "react";
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  // Mapping through and getting all the amounts into an array 
  const amounts = transactions.map(transaction => transaction.amount);

  // To get the total we're using reduce to add them all together and then using toFixed to get two decimal places 
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

	return (
  <>
    <h4>Your Balance</h4>
    <h1>${total}</h1>
  </>
  )
};
