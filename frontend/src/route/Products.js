
import React,{useState,useEffect} from "react";
import './Pro.css'
import {AiOutlineDelete,BsCheckLg} from 'react-icons/ai'
export default function Todo() {
  const[isCompleteScreen,setIsCompleteScreen]=useState(false);
  const[allTodos,setTodos]=useState([]);
  const[newTitle,setNewTitle]=useState("");
  const[newDescription,setNewDescription]=useState("");
  const handleAddTodo=()=>
  {
    let newTodoItem={
      title:newTitle,
      description:newDescription
    };
    let updatedTodoArr=[...allTodos];
    updatedTodoArr.push(newTodoItem);
    setTodos(updatedTodoArr);
    localStorage.SetItem('todolist',JSON.stringify(updatedTodoArr))

  };
  useEffect(()=>{
let savedTodo=JSON.parse(localStorage.getItem('todolist'));
if(savedTodo)
{
  setTodos(savedTodo);
}
  },[])
  return (
    <div className="task">
      <h1>Tasks</h1>
      <div className="todo-wrapper">
      <div className="todo-input">
      <div className="todo-input-item">
      <label>Title</label>
      <input type="text" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} placeholder="What's the task title?"/>
      </div>
      <div className="todo-input-item">
      <label>Description</label>
      <input type="text" value={newDescription} onChange={(e)=>setNewDescription(e.target.value)}placeholder="What's the task description?"/>
      </div>
      <div className="todo-input-item">
     <button type="button" onClick={handleAddTodo} className="primaryBtn">Add</button>
      </div>
      </div>
      
      <div className="todo-list">
      {allTodos.map((item,index)=>
        {
          return(
            <div className="todo-list-item" key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <AiOutlineDelete className='icon'/>
            <div className='check-icon'>
            <i class='fas fa-check' />
            </div>
            </div>
            )
          })}
          </div>
      </div>
    </div>
  );
}