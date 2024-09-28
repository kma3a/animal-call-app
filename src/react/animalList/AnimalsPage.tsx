import { useEffect, useState } from 'react';
import ShowAnimals from './showAnimals';
import AddAnimals from './addAnimals';

export default function AnimalsPage() {
  const [showAdd, setshowAdd] = useState(false);
  const [AnimalList, setAnimalList] = useState();

  const  togglesetshowAdd =  () => {
    setshowAdd(!showAdd);
  }

  const  updateAnimalList =  () => {
    setAnimalList(window?.electron?.sendSync('get-animals'));
  }

  useEffect(() => {
    updateAnimalList(); 
  }, [location.href]);
  
  return <>
      { showAdd ? <AddAnimals  /> : <button onClick={togglesetshowAdd}>Add Item</button>}
      <ShowAnimals animalList={AnimalList}/>
    </>;
}