import { useEffect, useState } from "react";

export const useCallPageViewModel = () => {
  const [callTopDemographics, setCallTopDemographics] = useState([]);
  const [callDemographics, setCallDemographics] = useState([]);
  const [animalList, setAnimalList] = useState([]);

  const adjustDemoList = (callDemo: {date: Date, animalName: string, callCount: number}[]):void => {
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
    setCallDemographics(newDemoList)
  }

  const fetchAnimalSpecies = ():void => {
    const animalList =  window?.electron?.sendSync('get-animalSpecies');
    setAnimalList(animalList);
  }

  const fetchCallTopDemographics = (): void => {
    const callTopDemographics = window?.electron?.sendSync('get-callTopDemographics');
    setCallTopDemographics(callTopDemographics);
  }

  const fetchCallDemographics = (): void => {
    const callDemoList = window?.electron?.sendSync('get-callDemographics');
    adjustDemoList(callDemoList);
  }



  useEffect(() => {
    fetchCallDemographics();
    fetchCallTopDemographics();
    fetchAnimalSpecies();
  }, []);

  return {
    animalList,
    callDemographics,
    callTopDemographics,
    reverseCallDemographics: callDemographics.sort((a,b) => a.date - b.date)
  };
};