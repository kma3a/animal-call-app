import { useEffect, useState } from 'react';
import { LineGraph } from '../graph/lineGraph/lineGraph';
import { PieGraph } from '../graph/pieGraph/pieGraph';

const CallPage
 = () => {
  const [callData, setCallData] = useState([]);
  const [callDemographics, setCallDemographics] = useState([]);
  const [callYearDemographics, setCallYearDemographics] = useState([]);

  const fetchCallData = (): void => {
    const callDataList = window?.electron?.sendSync('get-callCounts');
    setCallData(callDataList);
  }

  // const adjustYearDemoList = (callDemo):void => {
  //   const newDemoList = [];
  //   callDemo.forEach()
  // }

  // const fetchYearCallDemographics = (): void => {
  //   const callDemoList = window?.electron?.sendSync('get-callYearDemographics');
  //   adjustYearDemoList(callDemoList)
  // }

  const fetchCallDemographics = (): void => {
    const callDemoList = window?.electron?.sendSync('get-callDemographics');
    setCallDemographics(callDemoList)
  }


  useEffect(() => {
    fetchCallData(); 
    // fetchYearCallDemographics();
    fetchCallDemographics();
  }, []);

  return <>
    <h1> CALLS PAGE</h1>
    { callData ? <LineGraph data={callData}/> : <div> There are currently no call data found</div>}
    { callDemographics ? <PieGraph GraphData={callDemographics} /> : <div> There are currently no demographic data found</div>}
    {/* <ul>
      {callDemographics.map((animal) => <li key={animal.name}>{animal.name + "|" + animal.calls}</li>)}
    </ul> */}
    </>;
}

export {
  CallPage
  ,
}