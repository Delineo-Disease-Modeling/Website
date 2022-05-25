import LineChart from "./LineChart"
export default function CumulativeChart(props) {
    return LineChart(props, ["totalcases"], ["Infection vs Time", "Count", "Date"], ["#2d8983"]);
  }