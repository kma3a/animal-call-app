import { useEffect, useState } from 'react';
import { LineGraph } from '../graph/lineGraph/lineGraph';
import { PieGraph } from '../graph/pieGraph/pieGraph';

const CallPage
 = () => {
  const [callData, setCallData] = useState([]);
  const [callTopDemographics, setCallTopDemographics] = useState([]);
  const [callYearDemographics, setCallYearDemographics] = useState([]);

  const fetchCallData = (): void => {
    const callDataList = window?.electron?.sendSync('get-callCounts');
    setCallData(callDataList);
  }

  const adjustYearDemoList = (callDemo: {date: Date, animalName: string, callCount: number}[]):void => {
    const newDemoList = [];
    var currentYearObj = {};
    callDemo.forEach((animalCall: {date: Date, animalName: string, callCount: number}) => {
      if (animalCall.date !== currentYearObj?.date) {
        if(Object.keys(currentYearObj).length > 0) {newDemoList.push(currentYearObj)}
        currentYearObj = { date: animalCall.date};
      }
      const name = animalCall.animalName.replaceAll(" ", "");
      currentYearObj[name] = animalCall.callCount;
      
    });
    newDemoList.push(currentYearObj);
    setCallYearDemographics(newDemoList)
  }

  const fetchYearCallDemographics = (): void => {
    const callDemoList = window?.electron?.sendSync('get-callYearDemographics');
    adjustYearDemoList(callDemoList)
  }

  const fetchCallTopDemographics = (): void => {
    const callDemoList = window?.electron?.sendSync('get-callTopDemographics');
    setCallTopDemographics(callDemoList)
  }


  useEffect(() => {
    fetchCallData(); 
    fetchYearCallDemographics();
    fetchCallTopDemographics();
  }, []);

  return <>
    <h1> CALLS PAGE</h1>
    { callData ? <LineGraph data={callData}/> : <div> There are currently no call data found</div>}
    <div>
      <h2>Top {callTopDemographics.length} Animals Heard</h2>
      { callTopDemographics ? <PieGraph GraphData={callTopDemographics} /> : <div> There are currently no demographic data found</div>}
    </div>
   
    </>;
}

export {
  CallPage
  ,
}