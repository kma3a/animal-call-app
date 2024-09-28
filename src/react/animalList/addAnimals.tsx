
export default function ShowAnimals() {
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();    console.log('You clicked submit.', e);
    const newAnimal = {
      species: e.target[0].value.toLowerCase(),
      subspecies: e.target[1].value.toLowerCase(),
      binomial: e.target[2].value.toLowerCase(),
    }
    try {
      window?.electron?.sendSync('add-animals', newAnimal)
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