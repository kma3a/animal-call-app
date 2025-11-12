import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
interface LineGraphData {
  date: string,
  total: number,
}
interface LineGraphProps {
  data: LineGraphData[],
  display: {xAxis: string, yAxis: string}
}

const LineGraph = ({data, display}: LineGraphProps) => {
  const {xAxis, yAxis} = display;
  return (
    <LineChart
      style={{ width: '100%', maxWidth: '700px', height: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={xAxis} padding={{ left: 30, right: 30 }} />
      <YAxis width="auto" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey={yAxis} stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  );
}

export {
  LineGraph
}