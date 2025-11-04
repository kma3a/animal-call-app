import { PieChart, Pie, Tooltip } from 'recharts';
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
      style={{ width: '100%', maxWidth: '600px', maxHeight: '90vh', aspectRatio: 1 }}
      responsive
      margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
      onMouseMove={function cpe(){}}
    >
      <Pie
        data={GraphData}
        dataKey="callCount"
        onMouseEnter={function cpe(){}}
        onMouseLeave={function cpe(){}}
        fill="#8884d8"
      />
      <Tooltip
        content={function cpe(){}}
      />
    </PieChart>
    
  );
}

export {
  PieGraph
}