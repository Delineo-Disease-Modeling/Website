import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const SimpleBarChart = ({ width, height, data }) => {
  const renderColorfulLegendText = (value, entry) => {
    const { color } = entry;
    return <span style={{ color }}>{value}</span>;
  };

  return (
    <BarChart
      width={width}
      height={height}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis dataKey="name" interval="preserveStartEnd" />
      <YAxis interval="preserveStartEnd" />
      <Tooltip />
      <Legend formatter={renderColorfulLegendText} />
      <Bar layout="horizontal" dataKey="Susceptible" fill="#8884d8" />
      <Bar layout="horizontal" dataKey="Mild" fill="#8884d8" />
      <Bar layout="horizontal" dataKey="Severe" fill="#8884d8" />
      <Bar layout="horizontal" dataKey="Critical" fill="#8884d8" />
      <Bar layout="horizontal" dataKey="Recovered" fill="#8884d8" />
      <Bar layout="horizontal" dataKey="Dead" fill="#82ca9d" />
    </BarChart>
  );
};

export default SimpleBarChart;
