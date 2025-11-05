import { Cell, PieChart, Pie, Legend, Tooltip } from 'recharts';
interface PieGraphData {
  name: string,
  callCount: number,
}
interface PieGraphProps {
  GraphData: PieGraphData[]
}

const PieGraph = ({GraphData}: PieGraphProps) => {
  return (
    <PieChart
      style={{ width: '100%', maxWidth: '600px', maxHeight: '100vh', aspectRatio: 1 }}
      responsive
      margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
    >
      <Pie
        data={GraphData}
        dataKey="callCount"
        fill="#8884d8"
        label
        nameKey="name"
      >
        <Cell
        fill="orange"
        stroke="none"
      />
      <Cell
        fill="green"
        stroke="none"
      />
      <Cell
        fill="blue"
        stroke="none"
      />
      <Cell
        fill="red"
        stroke="none"
      />
      <Cell
        fill="indigo"
        stroke="none"
      />
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
    
  );
}

export {
  PieGraph
}