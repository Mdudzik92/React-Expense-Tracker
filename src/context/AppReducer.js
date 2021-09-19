export default (state, action) => {
  switch(action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id != action.payload)
      }
    default: 
      return state;
  }
}


// A reducer is how you specify the application's state changes in response to certain actions to the context, and send it down to your component
// Doesn't exactly change it, it creates a new state and sends it down