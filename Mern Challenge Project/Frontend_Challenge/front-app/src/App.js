
import React from 'react';
import TransactionsTable from './components/TransactionsTable';
import Statistics from './components/Statistics';
import BarChartComponent from './components/BarChart';
import PieChartComponent from './components/PieChart';
const App = () => {
  return (
    <div>
      <h1>Transactions</h1>
      <TransactionsTable />
      <h1>Statistics</h1>
      <Statistics />
      <h1>Bar Chart</h1>
      <BarChartComponent />
      <h1>Pie Chart</h1>
      <PieChartComponent />
    </div>
  );
};
export default App;