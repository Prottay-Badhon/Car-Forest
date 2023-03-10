import React from 'react';
import DataChart from '../../Utilites/DataChart.json';
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    BarChart,
    Bar,
  } from "recharts";
const MyBarChart = () => {
    return (
        <div>
            <h2>Investment vs Revenue</h2>
             <BarChart
          width={500}
          height={300}
          data={DataChart}
          margin={{
            top: 20,
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
          <Bar dataKey="investment" stackId="a" fill="#8884d8" />
          <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
        </BarChart>
        </div>
    );
};

export default MyBarChart;