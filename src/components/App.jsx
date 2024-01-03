import React from "react";
import Heading from "./Heading";
import List from "./List";
import InputArea from "./InputArea";

function App() {
  const [item, setItem] = React.useState([]);

  function addItem(inputText) {
    setItem((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItem((prevItems) => {
      return prevItems.filter((val, indx) => (indx !== id))
    })
  }
  return (
    <div className="container">
      <Heading />
      <InputArea addInput={addItem} />
      {item.map((obj, indx) => {
        return <List key={indx} content={obj} id={indx} handleClick={deleteItem} />
      })
      }
    </div>
  );
}

export default App;
