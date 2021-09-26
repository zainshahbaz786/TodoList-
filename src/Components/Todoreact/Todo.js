import React, { useState, useEffect } from "react";
import "./style.css";






export const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const [isEditItem,setEditItem]=useState("");

  const addItem = () => {
    if (!inputData) {
      alert("Please Fill the Data");
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

//getting back the local storage data
useEffect(() => {
  const savedTodos = localStorage.getItem("Todo Data");
  let parsedTodos = JSON.parse(savedTodos || "[]");

  if (parsedTodos.length) {
      setItems(parsedTodos);
  }
}, []);

//   How to Delete Item Section is here 
const deleteItem=(index)=>{
const updatedItems=items.filter((curElem)=>{
    return curElem !== items[index];
}) ;
setItems(updatedItems);
}



// This is for editing the Items
const editItem=(index)=>{
const item_edited=items.find((curElem)=>{
return curElem.id===index;

});
setInputData(item_edited.name); 
 setEditItem(index);
}



//function to delete all
const removeAll=()=>{
// we are changing the value to an empty array, this trick is used to remove all items :)
setItems([]);

}


// adding local storage code
useEffect(() => {
 localStorage.setItem("Todo Data",JSON.stringify(items));
}, [items])




  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="Todo Logo" />
            <figcaption>Add Your List Here</figcaption>
          </figure>
          <div className="addItems" >
            <input
              type="text"
              placeholder="Add item"
              className="form-control"
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />

            <i className="fa fa-plus " onClick={addItem}></i>
          </div>
          <br />
          <br />
          {/* Showing the Items here */}
          <div className="showItems">
              {/* here we will showing all thhe elements in the array  */}
            {items.map((curElem, Index) => {
              return (
                <div className="eachItem" key={Index}>
                  <h3>{curElem}</h3>
                  <div className="todo-btn">
                    <i className="far fa-edit " onClick={()=>editItem(curElem.index)}></i>
                    <i className="fas fa-trash-alt" onClick={()=>deleteItem(Index)}></i>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Here Showing the items */}

          <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
            {/* here removing alll */}
            <span> Check List </span>
          </button>
          
        </div>
      </div>
    </>
  );
};
