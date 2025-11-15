import { useEffect, useState } from "react";
import { CountPage } from "../../../../types";

export const useLunarPhasePageViewModel = () => {
  const [lunarCount, setLunarCount] = useState([]);
  const [animalList, setAnimalList] = useState([]);

  const fetchLunarPhaseCount = (): void => {
    const lunarList = window?.electron?.sendSync('get-callCount', {page: CountPage.LunarPhase});
    setLunarCount(lunarList)
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