import { useState } from "react";
import { Animals } from "../../data/animal.schema";
import { Locations } from "../../data/location.schema";

interface ListItemProps {
  item: Animals | Locations,
  classCatgory:string, 
  deleteFunction: (id:number) => void,
  updateFunction: (id:number,param: object) => void,
  columns: string[],
}

const ListItem = ({item,classCatgory, deleteFunction,updateFunction, columns}: ListItemProps) => {
  const [showUpdate, setshowUpdate] = useState(false);
  const handleClick = () => {
    deleteFunction(item.id)
  }

  const toggleUpdate = () => {
    setshowUpdate(!showUpdate); 
  }

  const handleSubmit = (e) => {
    let updatedItem = {};
    columns.forEach((item, index)=> updatedItem[item]=e.target[index].value.toLowerCase());
    updateFunction(item.id, updatedItem);
    toggleUpdate();
  }

  return <li key={"item_"+ item.id}>
    {
      !showUpdate ? <>
        { classCatgory === 'animals' && item.species + " - " +item.subspecies + " - " + item.binomial}
        { classCatgory === 'locations' && item.name + " - " + item.GPSNorth + " - " + item.GPSWest}
        <button onClick={handleClick}>Delete</button>
        <button onClick={toggleUpdate}>Update</button>
      </>  : <>
        <form onSubmit={handleSubmit}>
          {columns.map((columnName) => <label>
            {columnName.toUpperCase()}: 
            <input name={columnName} defaultValue={item[columnName]} />
          </label>)} 
        
          <button type='submit'>Update Animal</button>
          <button onClick={toggleUpdate}>Cancel</button>
        </form>
      </>
    }
  </li>
}

interface ListProps {
  list: Animals[],
  className:string,
  onDelete: (id:number) => void,
  onUpdate: (id:number,param: object) => void,
  columnList: string[],
}

const List = ({list, className, onDelete, onUpdate, columnList}: ListProps) => {

  let listItems = list.map((listItem) => <ListItem item={listItem} classCatgory={className} deleteFunction={onDelete} updateFunction={onUpdate} columns={columnList}/>)
  return <ul key={className+list.length}>{listItems}</ul>
}

export {
  List
}