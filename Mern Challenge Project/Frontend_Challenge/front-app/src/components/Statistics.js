import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Statistics = () => {
  const [statistics, setStatistics] = useState({});
  const [month, setMonth] = useState('March');

  useEffect(() => {
    const fetchStatistics = async () => {
      const response = await axios.get(`http://localhost:3001/api/statistics`, {
        params: {
          month,
        },
      });
      setStatistics(response.data);
    };
    fetchStatistics();
  }, [month]);

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  return (
    <div>
      <select value={month} onChange={handleMonthChange}>
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
      </select>
      <h2>Statistics</h2>
      <p>Total Sale Amount: {statistics.totalSaleAmount}</p>
      <p>Total Sold Items: {statistics.totalSoldItems}</p>
      <p>Total Not Sold Items: {statistics.totalNotSoldItems}</p>
    </div>
  );
};
export default Statistics;