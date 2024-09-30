import { Animals } from "../../data/animal.schema";


const ListItem = ({item,classCatgory}: {item: Animals, classCatgory:string}) => {
  return <li key={"item_"+ item.id}>
    { classCatgory === 'animals' && item.subspecies + " - " + item.binomial}
  </li>
}


const List = ({list, className}: {list: Animals[], className:string,}) => {
  console.log(list[0])
  console.log(list[0].toString())

  let listItems = list.map((listItem) => <ListItem item={listItem} classCatgory={className}/>)
  return <ul key={className+list.length}>{listItems}</ul>
}

export {
  List
}