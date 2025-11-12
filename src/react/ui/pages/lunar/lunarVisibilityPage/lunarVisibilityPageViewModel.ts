import { useEffect, useState } from "react";

export const useLunarVisibilityPageViewModel = () => {
  const [lunarCount, setLunarCount] = useState([]);
  const [animalList, setAnimalList] = useState([]);

  const adjustLunarVisibilityCount = (list: {isMoonVisible: boolean, animalName: string, callCount: number}[]):void => {
    const newList = [];
    var currentObj = {};
    list.forEach((animalCall: {isMoonVisible: boolean, animalName: string, callCount: number}) => {
      const isMoonVisible = animalCall.isMoonVisible ? "visible" : "not visible";
      if (currentObj?.isMoonVisible !==  isMoonVisible) {
        if(Object.keys(currentObj).length > 0) {newList.push(currentObj)}
        currentObj = { isMoonVisible: isMoonVisible, total: 0};
      }
      const name = animalCall.animalName.replaceAll(" ", "");
      currentObj[name] = animalCall.callCount;
      currentObj.total += animalCall.callCount;
      
    });
    newList.push(currentObj);
    setLunarCount(newList)
  }

  const fetchLunarVisibilityCount = (): void => {
    const lunarList = window?.electron?.sendSync('get-lunarVisibilityCount');
    adjustLunarVisibilityCount(lunarList);
  }

  const fetchAnimalSpecies = ():void => {
    const animalList =  window?.electron?.sendSync('get-animalSpecies');
    setAnimalList(animalList);
  }


  useEffect(() => {
    fetchLunarVisibilityCount();
    fetchAnimalSpecies();
  }, []);

  return {
    animalList,
    lunarCount,
  };
};