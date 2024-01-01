import React from "react";
import List from "./List";

function Form() {
    // const [item, setItem] = React.useState("");
    const [senditem, setSendItem] = React.useState();
    // function handleChange(e) {
    //     let inputItem = e.target.value;
    //     // console.log(inputItem);
    //     setItem(inputItem);
    // }

    return (
        <>
            <div className="form">
                <input type="text" id="inputx" />
                <button
                    onClick={() => {
                        setSendItem(document.getElementById("inputx").value);
                        document.getElementById("inputx").value = "";
                        document.getElementById("inputx").focus();
                    }}
                >
                    <span>Add</span>
                </button>
            </div>
            <List value={senditem} />
        </>
    );
}

export default Form;
