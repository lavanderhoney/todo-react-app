import React from "react";
import ListItem from "./ListItem";
let indx = 0;
let items = [];
function List(props) {
  items.push(props.value);

  console.log(items);
  function insertItem(obj) {
    indx++;
    return (obj != null && <ListItem key={indx} list_item={obj} />)
  }
  return (
    <div>
      <ul>
        {items.map(insertItem)}
      </ul>
    </div>
  );
}

export default List;
