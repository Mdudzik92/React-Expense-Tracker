import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
// Any global state would go in this object.
// However, all we need is our transactions because as long as we have access to the transactions in certain components we can do our calculations there. Like for the balance, etc. 
// We just need to be able to pass this data down, and then we'll have actions like deleting and adding transactions from this piece of state
const initialState = {
  transactions: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 }
  ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component - this allows other components to have access to our global state. Wraps all the components.
export const GlobalProvider = ({ children }) => {
  // Whenever we need to call a reducer action we need to use dispatch
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions that make calls to the reducer
  function deleteTransaction(id) {
    // Dispatching an object to our reducer. An action with a type and a payload
    dispatch({
      type: 'DELETE_TRANSACTION',
      // payload is any data we want to send to it
      payload: id
    });
  }


  // What the provider does is it provides our state, and provides any actions to the components that it's wrapped around
  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction
  }}>
    {children}
  </GlobalContext.Provider>)
}