import { LIMIT_ATTACHED } from "sqlite3";
import { Animals } from "../..//data/animal.schema";

interface AddAnimalsProps {
  onSubmit: (list?: Animals[]) => void,
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
        <label>
          Species: 
          <input name="species"/>
        </label>
        <label>
          Subspecies:
          <input name="subspecies"/>
        </label>
        <label>
          Binomial:
          <input name="binomial"/>
        </label>
        <button type='submit'>Add Animal</button>
       </form>
    </>;
}

export {
  AddAnimals
}