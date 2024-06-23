import { createStore, combineReducers } from 'edux';
import transactionsReducer from './reducers/transactionsReducer';

const rootReducer = combineReducers({
  transactions: transactionsReducer,
});

const store = createStore(rootReducer);

export default store;