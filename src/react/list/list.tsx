import { Animals } from "../../data/animal.schema";


const ListItem = ({item,classCatgory, deleteFunction}: {item: Animals, classCatgory:string, deleteFunction: (id:number) => void}) => {
  const handleClick = () => {
    deleteFunction(item.id)
  }
  return <li key={"item_"+ item.id}>
    { classCatgory === 'animals' && item.subspecies + " - " + item.binomial}
    <button onClick={handleClick}>Delete</button>
  </li>
}


const List = ({list, className, onDelete}: {list: Animals[], className:string,onDelete: (id:number) => void}) => {

  let listItems = list.map((listItem) => <ListItem item={listItem} classCatgory={className} deleteFunction={onDelete}/>)
  return <ul key={className+list.length}>{listItems}</ul>
}

export {
  List
}