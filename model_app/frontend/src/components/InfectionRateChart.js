import React, {PureComponent} from "react";
import {
  LineChart,
  Line
} from "recharts";
import data from "../data/linedata.json";

class InfectionRateChart extends React.Component {
   const 

   render() {
      return(
         <LineChart height={200} data={data}>
            <Line type="monotone" stroke="#8884d8" strokeWidth={2}/>
         </LineChart>
      );
   }
}
export default InfectionRateChart;