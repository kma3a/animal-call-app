import { BarGraph } from "../../../components/graph/barGraph/barGraph";
import { TableDisplay } from "../../../components/table/tableDisplay";
import { useLunarVisibilityPageViewModel } from "./lunarVisibilityPageViewModel";

const LunarVisibilityPage = () => {
  const {animalList, lunarCount} = useLunarVisibilityPageViewModel();

  return <>
    <h1>Lunar Visibility Page</h1>
    <div>
      {lunarCount ? <BarGraph data={lunarCount} display={{xAxis: "isMoonVisible", bar: "total"}} /> : <p>Data Unavailable</p> }
    </div>

    <div>
      { lunarCount ? <TableDisplay data={lunarCount} animalList={animalList} firstCell={{title: "Lunar Visibility", key: "isMoonVisible"}} /> : <p>Data Unavailable</p>} 
    </div>
  </>;
}

export {
  LunarVisibilityPage,
}