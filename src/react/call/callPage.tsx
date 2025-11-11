import { LineGraph } from '../graph/lineGraph/lineGraph';
import { PieGraph } from '../graph/pieGraph/pieGraph';
import { TableDisplay } from '../table/tableDisplay';
import { useCallPageViewModel } from './callPageViewModel';

const CallPage
 = () => {

  const {animalList, callDemographics, callTopDemographics, reverseCallDemographics} = useCallPageViewModel();
  

  return <>
    <h1> CALLS PAGE</h1>
    { callDemographics ? <LineGraph data={reverseCallDemographics}/> : <div> There are currently no call data found</div>}
    <div>
      <h2>Top {callTopDemographics.length} Animals Heard</h2>
      { callTopDemographics ? <PieGraph GraphData={callTopDemographics} /> : <div> There are currently no demographic data found</div>}
    </div>
    <div>
      <TableDisplay data={callDemographics} animalList={animalList} firstCell={{title: "Date", key: "date"}}/> 
    </div>
   
  </>;
}

export {
  CallPage
}