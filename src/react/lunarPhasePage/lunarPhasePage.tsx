import { TableDisplay } from "../table/tableDisplay";
import { useLunarPhasePageViewModel } from "./lunarPhasePageViewModel";

const LunarPhasePage = () => {
  const {animalList, lunarCount} = useLunarPhasePageViewModel();

  return <>
    <h1>Lunar Phase Page</h1>

    <div>
      <TableDisplay data={lunarCount} animalList={animalList} firstCell={{title: "Lunar Phase", key: "moonPhase"}}/> 
    </div>
  </>;
}

export {
  LunarPhasePage,
}