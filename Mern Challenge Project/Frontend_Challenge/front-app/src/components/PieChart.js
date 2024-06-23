import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PieChart, Pie, Sector, Cell } from 'recharts';
const PieChartComponent = () => {
  const [data, setData] = useState([]);
  const [month, setMonth] = useState('March');
 useEffect(() => {
    const fetchPieChart = async () => {
      const response = await axios.get(`http://localhost:3001/api/pie-chart`, {
        params: {
          month,
        },
      });
      setData(response.data);
    };
    fetchPieChart();
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
      <PieChart width={500} height={300}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.fill} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};
export default PieChartComponent;