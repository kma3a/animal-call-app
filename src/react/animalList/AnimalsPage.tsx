import { useEffect, useState } from 'react';
import {ShowAnimals } from './showAnimals';
import { AddItems } from '../addItem/addItems';
import { Animals } from '../../data/animal.schema';

const animalColumns = ["species", "subspecies", "binomial"];

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
  const addAnimal = (newAnimal: object) => {
    updateAnimalList(window?.electron?.sendSync('add-animals', newAnimal));
    togglesetshowAdd();
  }

  useEffect(() => {
    updateAnimalList(); 
  }, [location.href]);
  
  return <>
      { showAdd ? <AddItems onSubmit={addAnimal}  columnList={animalColumns}/> : <button onClick={togglesetshowAdd}>Add Item</button>}
      { AnimalList && <ShowAnimals animalList={AnimalList}/>}
    </>;
}

export {
  AnimalsPage,
}