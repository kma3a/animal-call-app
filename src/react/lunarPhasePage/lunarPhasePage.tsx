import { BarGraph } from "../graph/barGraph/barGraph";
import { TableDisplay } from "../table/tableDisplay";
import { useLunarPhasePageViewModel } from "./lunarPhasePageViewModel";

const LunarPhasePage = () => {
  const {animalList, lunarCount} = useLunarPhasePageViewModel();

  return <>
    <h1>Lunar Phase Page</h1>
    <div>
      {lunarCount ? <BarGraph data={lunarCount} display={{xAxis: "moonPhase", bar: "total"}} /> : <p>Data Unavailable</p> }
    </div>

    <div>
      { lunarCount ? <TableDisplay data={lunarCount} animalList={animalList} firstCell={{title: "Lunar Phase", key: "moonPhase"}} /> : <p>Data Unavailable</p>} 
    </div>
  </>;
}

export {
  LunarPhasePage,
}