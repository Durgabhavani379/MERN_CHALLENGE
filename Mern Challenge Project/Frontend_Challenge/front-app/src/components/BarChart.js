import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
const BarChartComponent = () => {
  const [data, setData] = useState([]);
  const [month, setMonth] = useState('March');
useEffect(() => {
    const fetchBarChart = async () => {
      const response = await axios.get(`http://localhost:3001/api/bar-chart`, {
        params: {
          month,
        },
      });
      setData(response.data);
    };
    fetchBarChart();
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
      <BarChart width={500} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#ccc" />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default BarChartComponent;