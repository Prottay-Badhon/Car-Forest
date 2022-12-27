import React from "react";
import { PieChart, Pie } from "recharts";
import DataChart from "../../Utilites/DataChart.json";
const MyPieChart = () => {
  return (
    <div>
            <h2>Investment vs Revenue</h2>
      <PieChart width={400} height={400}>
        <Pie
          data={DataChart}
          dataKey="investment"
          cx="50%"
          cy="50%"
          outerRadius={60}
          fill="#8884d8"
        />
        <Pie
          data={DataChart}
          dataKey="revenue"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          fill="#82ca9d"
          label
        />
      </PieChart>
    </div>
  );
};

export default MyPieChart;
