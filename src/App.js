import React, {useState} from 'react';
import './App.css';

function App(){
  const [toDoList, setToDoList]=useState([
    {text:"Study React"},
    {text:"Study React"}
  ]);

  //set input value
  const [value, setValue]=useState(['']);
 

  //Form Submission
  const handleSubmit=(e)=>{
    e.preventDefault();
    addToDo(value);
    setValue('');
  };
  
  //Add and Update Todo List
  const addToDo =(text)=>{
    const updateToDoList=[...toDoList, {text}];
    setToDoList(updateToDoList);
  }
  return(
    <div>
      <h1>To Do List</h1>
      <div className= 'toDoList'>
      {
        toDoList.map((todo, index)=>(
         
            <p>{todo.text}</p>
         
        ))
      }
      </div>
      <div className='todoInput'>
      <form onSubmit={handleSubmit}>
        <input placeholder="Things to do....."
        value={value}
        onChange={addText=>setValue(addText.target.value)}
        />
        <button type='submit'>Add</button>
      </form>
      </div>
    </div>
  )
}
export default App;