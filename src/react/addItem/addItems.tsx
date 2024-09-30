
interface AddItemProps {
  onSubmit: (newItem: object) => void,
  columnList: string[],
}

const AddItems = ({onSubmit, columnList}: AddItemProps) => {
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    let newItem = {};
    columnList.forEach((item, index)=> newItem[item]=e.target[index].value.toLowerCase());

    try {
      onSubmit(newItem);
    } catch (err) {
      console.log(err);
      //TODO handle error

    }

  } 

  return <>
       <form onSubmit={handleSubmit}>
        {columnList.map((columnName) => <label>
          {columnName.toUpperCase()}: 
          <input name={columnName}/>
        </label>)} 
       
        <button type='submit'>Add Animal</button>
       </form>
    </>;
}

export {
  AddItems
}