import { useEffect, useState } from 'react';
import {ShowAnimals } from './showAnimals';
import { AddAnimals } from './addAnimals';
import { Animals } from '../../data/animal.schema';

type animalCallback = (list?: Animals[]) => void

const AnimalsPage = () => {
  const [showAdd, setshowAdd] = useState(false);
  const [AnimalList, setAnimalList] = useState();

  const  togglesetshowAdd =  () => {
    setshowAdd(!showAdd);
  }

  const updateAnimalList = (list?: Animals[]): void => {
    const setList = list ?? window?.electron?.sendSync('get-animals')
    setAnimalList(setList);
  }

  useEffect(() => {
    updateAnimalList(); 
  }, [location.href]);
  
  return <>
      { showAdd ? <AddAnimals onSubmit={updateAnimalList} onToggle={togglesetshowAdd}/> : <button onClick={togglesetshowAdd}>Add Item</button>}
      <ShowAnimals animalList={AnimalList}/>
    </>;
}

export {
  AnimalsPage,
  animalCallback
}