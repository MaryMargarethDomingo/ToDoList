import React, { useState } from "react";
import uuid from "react-uuid";
import "./App.css";

function App() {
  const [toDoList, setToDoList] = useState(null);

  //set input value
  const [value, setValue] = useState([]);

  //Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addToDo(value);
    setValue([]);
  };

  //Add and Update Todo List
  const addToDo = (text) => {
    let updateToDoList = [{ id: uuid(), text: text }];

    if (toDoList !== null) {
      updateToDoList = [...toDoList, { id: uuid(), text: text }];
    }

    setToDoList(updateToDoList);
  };

  const deleteList = (id) => {
    const todoFilter = toDoList.filter((v) => v.id !== id);

    setToDoList(todoFilter);
  };

  return (
    <div>
      <h1>To Do List</h1>
      <div className='toDoList'>
        {toDoList !== null &&
          toDoList.map((todo, index) => (
            <div
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <p key={`id-${todo.id}`}>{todo.text}</p>
              <button onClick={() => deleteList(todo.id)}>Delete</button>
            </div>
          ))}
      </div>
      <div className='todoInput'>
        <form onSubmit={handleSubmit}>
          <input
            placeholder='Things to do.....'
            value={value}
            onChange={(addText) => setValue(addText.target.value)}
          />
          <button type='submit'>Add</button>
        </form>
      </div>
    </div>
  );
}
export default App;
