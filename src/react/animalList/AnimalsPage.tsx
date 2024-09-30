import { useEffect, useState } from 'react';
import { AddItems } from '../addItem/addItems';
import { Animals } from '../../data/animal.schema';
import { List } from '../list/list';

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
      { AnimalList ? <List list={AnimalList} className='animals' /> : <div> There is currently no animals found</div>}
    </>;
}

export {
  AnimalsPage,
}