import { useState } from "react";

export const useNavBarViewModel = () => {
  const [currentSelected, setCurrentSelected] = useState(0);
  
  const navList = [
    {
      href: "/main_window",
      label: "Home",
    },
    {
      href: "lunar_phase",
      label: "Lunar Phase",
    },
    {
      href: "lunar_visibility",
      label: "Lunar Visibility",
    }
  ];

  const setSelected = (index: number) => {
    if(currentSelected === index) return;
    setCurrentSelected(index);
    console.log("Selected", navList);
  }


  return {
    navList,
    currentSelected,
    setSelected,
  };
};