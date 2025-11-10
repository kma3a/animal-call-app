import { useEffect, useState } from 'react';
import { LineGraph } from '../graph/lineGraph/lineGraph';
import { PieGraph } from '../graph/pieGraph/pieGraph';
import { TableDisplay } from '../table/tableDisplay';

const CallPage
 = () => {
  const [callData, setCallData] = useState([]);
  const [callTopDemographics, setCallTopDemographics] = useState([]);
  const [callYearDemographics, setCallYearDemographics] = useState([]);
  const [animalList, setAnimalList] = useState([]);

  const adjustYearDemoList = (callDemo: {date: Date, animalName: string, callCount: number}[]):void => {
    const newDemoList = [];
    var currentYearObj = {};
    callDemo.forEach((animalCall: {date: Date, animalName: string, callCount: number}) => {
      if (animalCall.date !== currentYearObj?.date) {
        if(Object.keys(currentYearObj).length > 0) {newDemoList.push(currentYearObj)}
        currentYearObj = { date: animalCall.date, total: 0};
      }
      const name = animalCall.animalName.replaceAll(" ", "");
      currentYearObj[name] = animalCall.callCount;
      currentYearObj.total += animalCall.callCount; 
      
    });
    newDemoList.push(currentYearObj);
    setCallYearDemographics(newDemoList)
  }

  const fetchAnimalSpecies = ():void => {
    const animalList =  window?.electron?.sendSync('get-animalSpecies');
    setAnimalList(animalList);
  }

  const fetchCallData = (): void => {
    const callDataList = window?.electron?.sendSync('get-callCounts');
    setCallData(callDataList);
  }
  const fetchCallTopDemographics = (): void => {
    const callTopDemographics = window?.electron?.sendSync('get-callTopDemographics');
    setCallTopDemographics(callTopDemographics);
  }

  const fetchYearCallDemographics = (): void => {
    const yearCallDemoList = window?.electron?.sendSync('get-callYearDemographics');
    adjustYearDemoList(yearCallDemoList);
  }



  useEffect(() => {
    fetchCallData(); 
    fetchYearCallDemographics();
    fetchCallTopDemographics();
    fetchAnimalSpecies();
  }, []);

  return <>
    <h1> CALLS PAGE</h1>
    { callData ? <LineGraph data={callData}/> : <div> There are currently no call data found</div>}
    <div>
      <h2>Top {callTopDemographics.length} Animals Heard</h2>
      { callTopDemographics ? <PieGraph GraphData={callTopDemographics} /> : <div> There are currently no demographic data found</div>}
    </div>
    <div>
      <TableDisplay data={callYearDemographics} animalList={animalList} firstCell={{title: "Date", key: "date"}}/> 
    </div>
   
  </>;
}

export {
  CallPage
}