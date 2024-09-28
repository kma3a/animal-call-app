import { animalCallback } from "./AnimalsPage";

interface AddAnimalsProps {
  onSubmit: animalCallback,
  onToggle: () => void
}

const AddAnimals = ({onSubmit, onToggle}: AddAnimalsProps) => {
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newAnimal = {
      species: e.target[0].value.toLowerCase(),
      subspecies: e.target[1].value.toLowerCase(),
      binomial: e.target[2].value.toLowerCase(),
    }
    try {
      onSubmit(window?.electron?.sendSync('add-animals', newAnimal));
      onToggle();
    } catch (err) {
      console.log(err);
      //TODO handle error

    }

  } 

  return <>
       <form onSubmit={handleSubmit}>
        <input name="species"/>
        <input name="subspecies"/>
        <input name="binomial"/>
        <button type='submit'>Add Animal</button>
       </form>
    </>;
}

export {
  AddAnimals
}