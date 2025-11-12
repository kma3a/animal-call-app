
interface AddItemProps {
  onSubmit: (newItem: object) => void,
  columnList: string[],
  cancelAction: () => void
}

const AddItems = ({onSubmit, columnList, cancelAction}: AddItemProps) => {
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
       
        <button type='submit'>Add</button>

        <button onClick={cancelAction}>Cancel</button>
       </form>
    </>;
}

export {
  AddItems
}