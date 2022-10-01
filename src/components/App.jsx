import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {

    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState([]);

    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
    }

    function addItem() {
        setItems(prevValue => {
            return ([...prevValue, inputText])
        });
        setInputText("");
    }

    function deleteItem(id){
        setItems(prevValue => {
            return (prevValue.filter((item,index) => {
                return index !== id;
            }))
        })
    }


    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                <input
                    type="text"
                    // placeholder="Add Item"
                    value={inputText}
                    onChange={handleChange}
                ></input>
                <button onClick={addItem}>Add</button>
            </div>
            <ul>
                {
                    items.map((todoItem,index) => (
                        <ToDoItem
                        key = {index}
                        id = {index}
                        onDelete = {deleteItem}
                        text = {todoItem}
                        ></ToDoItem>
                    ))
                }
            </ul>
        </div>
    )

}

export default App;