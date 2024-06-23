const initialState = {
    transactions: [],
  };
  
  const transactionsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_TRANSACTIONS_SUCCESS':
        return {...state, transactions: action.transactions };
      case 'CREATE_TRANSACTION_SUCCESS':
        return {...state, transactions: [...state.transactions, action.transaction] };
      case 'UPDATE_TRANSACTION_SUCCESS':
        return {
         ...state,
          transactions: state.transactions.map(transaction => {
            if (transaction.id === action.transaction.id) {
              return action.transaction;
            }
            return transaction;
          }),
        };
      case 'DELETE_TRANSACTION_SUCCESS':
        return {
         ...state,
          transactions: state.transactions.filter(transaction => transaction.id!== action.transactionId),
        };
      default:
        return state;
    }
  };
  
  export default transactionsReducer;