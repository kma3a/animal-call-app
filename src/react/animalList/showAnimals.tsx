import { Animals } from '../../data/animal.schema';

function ListItem({animal}: {animal: Animals}) {
  return <li key={animal.id}>
    {animal.species} - {animal.subspecies} - {animal.binomial}
  </li>
}


function List({animals}: {animals: Animals[] }) {
  let listItems = animals.map((animal) => <ListItem animal={animal}/>)
  return <ul key="animals">{listItems}</ul>
}



export default function ShowAnimals({animalList}: {animalList: Animals[] }) {
  
  return <>
      {
        animalList ? <List animals={animalList} /> : <div> There is currently no animals found</div>
      }
    </>;
}