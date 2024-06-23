export const fetchTransactions = () => async dispatch => {
    try {
      const response = await axios.get('http://localhost:3001/api/transactions');
      dispatch({ type: 'FETCH_TRANSACTIONS_SUCCESS', transactions: response.data });
    } catch (error) {
      console.error(error);
    }
  };
  
  export const createTransaction = (transaction) => async dispatch => {
    try {
      const response = await axios.post('http://localhost:3001/api/transactions', transaction);
      dispatch({ type: 'CREATE_TRANSACTION_SUCCESS', transaction: response.data });
    } catch (error) {
      console.error(error);
    }
  };
  
  export const updateTransaction = (transaction) => async dispatch => {
    try {
      const response = await axios.put(`http://localhost:3001/api/transactions/${transaction.id}`, transaction);
      dispatch({ type: 'UPDATE_TRANSACTION_SUCCESS', transaction: response.data });
    } catch (error) {
      console.error(error);
    }
  };
  
  export const deleteTransaction = (transactionId) => async dispatch => {
    try {
      await axios.delete(`http://localhost:3001/api/transactions/${transactionId}`);
      dispatch({ type: 'DELETE_TRANSACTION_SUCCESS', transactionId });
    } catch (error) {
      console.error(error);
    }
  };