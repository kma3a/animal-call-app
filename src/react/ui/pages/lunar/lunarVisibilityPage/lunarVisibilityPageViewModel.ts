import { useEffect, useState } from "react";
import { CountPage } from "../../../../types";

export const useLunarVisibilityPageViewModel = () => {
  const [lunarCount, setLunarCount] = useState([]);
  const [animalList, setAnimalList] = useState([]);

  const updateVisibleStatus = (data: []): any[] => {
    const newMap = []
    data.forEach((item) => {
      let newItem = structuredClone(item);
      newItem.isMoonVisible = item.isMoonVisible ? "visible" : "not visible";
      newMap.push(newItem);
    })
    return newMap;

  }

  const fetchLunarVisibilityCount = (): void => {
    const lunarList = window?.electron?.sendSync('get-callCount', {page: CountPage.LunarVis});
    const updatedList = updateVisibleStatus(lunarList);
    setLunarCount(updatedList)
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