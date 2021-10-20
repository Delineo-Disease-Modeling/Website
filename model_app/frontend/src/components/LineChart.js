import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const SimpleLineChart = () => {
  const renderColorfulLegendText = (value, entry) => {
    const { color } = entry;
    return <span style={{ color }}>{value}</span>;
  };

  const { width, height, data } = this.props;
  return (
    <LineChart width={width} height={height} data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5, }} >
      <XAxis dataKey="name" interval="preserveStartEnd" />
      <YAxis interval="preserveStartEnd" />
      <Tooltip />
      <Legend formatter={renderColorfulLegendText} />
      <Line type="monotone" dataKey="infected" stroke="#8884d8" dot={false} />
      <Line type="monotone" dataKey="deaths" stroke="#82ca9d" dot={false} />
    </LineChart>
  );
};

export default SimpleLineChart;
