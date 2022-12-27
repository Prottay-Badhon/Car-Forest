import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
} from "recharts";
import DataChart from "../../Utilites/DataChart.json";
const MyAreaChart = () => {
  return (
    <div>
      <AreaChart
        width={500}
        height={400}
        data={DataChart}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis dataKey="investment"/>
        <Tooltip />
        <Area
          type="monotone"
          dataKey="investment"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="revenue"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
      </AreaChart>
    </div>
  );
};

export default MyAreaChart;
