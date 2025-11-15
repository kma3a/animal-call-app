import {  XAxis, Tooltip, BarChart, Bar, CartesianGrid, YAxis } from 'recharts';

interface BarGraphData {
}
interface BarGraphProps {
  data: BarGraphData[],
  display: {xAxis: string, bar: string}
}

const BarGraph = ({data, display}: BarGraphProps) => {
  const {xAxis, bar} = display;
  return (
    <BarChart
      style={{ width: '100%', maxWidth: '700px', height: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
      accessibilityLayer
      barCategoryGap="10%"
      barGap={4}
      data={data}
      margin={{
        bottom: 5,
        left: 20,
        right: 30,
        top: 20
      }}
      layout="vertical"
      syncMethod="index"
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number"  />
      <YAxis dataKey={xAxis} type="category" />
      <Tooltip />
      <Bar
        dataKey={bar}
        fill="#82ca9d"
      />
    </BarChart>
  );
}

export {
  BarGraph
}