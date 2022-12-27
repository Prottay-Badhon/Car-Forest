import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
  } from "recharts";
import DataChart from "../../Utilites/DataChart.json";

const MyLineChart = () => {
    return (
      <ResponsiveContainer>
            <LineChart
        width={400}
        height={250}
        data={DataChart}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="sell"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
        </ResponsiveContainer>
    );
};

export default MyLineChart;