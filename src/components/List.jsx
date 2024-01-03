import React from "react";
function List(props) {
  return (
    <div onClick={() => { props.handleClick(props.id) }}>
      <ul>
        <li>{props.content}</li>
      </ul>
    </div>
  );
}

export default List;
