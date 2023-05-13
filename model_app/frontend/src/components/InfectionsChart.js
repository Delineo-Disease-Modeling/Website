import React from "react";
import {
  AreaChart,
  Area,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
class InfectionsChart extends React.Component {
  render() {
    return (
      <AreaChart
        data={this.props.data}
        height={this.props.height}
        width={this.props.width}
        margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis 
          dataKey="name"
          tick={{ fill: "#66FCF1"}} />

        <YAxis 
          tick={{ fill: "#66FCF1"}}/>
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="infections"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="people"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    );
  }
}
export default InfectionsChart;
