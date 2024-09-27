import { useEffect,useState } from 'react';
import { Animals } from '../../data/animal.schema';

function ListItem({animal}: {animal: Animals}) {
  return <li key={animal.id}>
    {animal.subspecies}
  </li>
}


function List({animals}: {animals: any[] }) {
  let listItems = animals.map((animal) => <ListItem animal={animal}/>)
  return <ul>{listItems}</ul>
}



export default function ShowAnimals() {
  const [AnimalList, setAnimalList] = useState();

  useEffect(() => {
    console.log("calliing useEffect")
    setAnimalList(window?.electron?.sendSync('get-animals'));
    console.log(AnimalList);
  }, [location.href]);
  return <>
      {
        AnimalList ? <List animals={AnimalList} /> : <div> There is currently no animals found</div>
      }
    </>;
}