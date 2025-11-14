import { useEffect, useState } from "react";
import { DateDisplay, CountPage } from "../../../types";

export const useCallPageViewModel = () => {
  const [callTopDemographics, setCallTopDemographics] = useState([]);
  const [callDemographics, setCallDemographics] = useState([]);
  const [animalList, setAnimalList] = useState([]);

  const fetchAnimalSpecies = ():void => {
    const animalList =  window?.electron?.sendSync('get-animalSpecies');
    setAnimalList(animalList);
  }

  const fetchCallTopDemographics = (): void => {
    const callTopDemographics = window?.electron?.sendSync('get-callTopDemographics');
    setCallTopDemographics(callTopDemographics);
  }

  const fetchCallDemographics = (): void => {
    const callDemoList = window?.electron?.sendSync('get-callCount', {page: CountPage.Call, dateDisplay: DateDisplay.Year});
    setCallDemographics(callDemoList)
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
    reverseCallDemographics: callDemographics.toReversed()
  };
};