import LineChart from "./LineChart"
export default function Graph4(props) {
    return LineChart(props, ["normal", "asym", "mild", "critical", "recovered"], ["Daily Infection Breakdown", "Count", "Date"], ["#6e40aa", "#417de0", "#1ac7c2", "#40f373", "#A882c0"]);
}

/*
'normal': 10,
'asym': 0,
'mild': 0,
'critical': 0,
'recovered': 0
*/