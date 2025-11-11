import { useEffect, useState } from "react";

export const useLunarPhasePageViewModel = () => {
  const [lunarCount, setLunarCount] = useState([]);
  const [animalList, setAnimalList] = useState([]);

  const adjustLunarPhaseCount = (list: {moonPhase: string, animalName: string, callCount: number}[]):void => {
    const newList = [];
    var currentObj = {};
    list.forEach((animalCall: {moonPhase: string, animalName: string, callCount: number}) => {
      if (currentObj?.moonPhase !==  animalCall.moonPhase) {
        if(Object.keys(currentObj).length > 0) {newList.push(currentObj)}
        currentObj = { moonPhase: animalCall.moonPhase, total: 0};
      }
      const name = animalCall.animalName.replaceAll(" ", "");
      currentObj[name] = animalCall.callCount;
      currentObj.total += animalCall.callCount;
      
    });
    newList.push(currentObj);
    setLunarCount(newList)
  }

  const fetchLunarPhaseCount = (): void => {
    const lunarList = window?.electron?.sendSync('get-lunarPhaseCount');
    adjustLunarPhaseCount(lunarList);
  }

  const fetchAnimalSpecies = ():void => {
    const animalList =  window?.electron?.sendSync('get-animalSpecies');
    setAnimalList(animalList);
  }


  useEffect(() => {
    fetchLunarPhaseCount();
    fetchAnimalSpecies();
  }, []);

  return {
    animalList,
    lunarCount,
  };
};