import React from "react";

function InputArea(props) {
    const [inputText, setInputText] = React.useState("");

    function handleChange(event) {
        setInputText(event.target.value);
    }

    return (
        <div className="form">
            <input type="text" id="inputx" value={inputText} onChange={handleChange} />
            <button onClick={() => {
                props.addInput(inputText);
                setInputText("");
                document.getElementById("inputx").focus();
            }}>
                <span>Add</span>
            </button>
        </div>
    );
}

export default InputArea;
