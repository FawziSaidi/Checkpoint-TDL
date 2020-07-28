import ToDoNew from "./ToDoNew"
import React, { useState } from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState([ ]);
    function handleRemove(id){
const deleteList = todos.filter((todo) => todo.id !== id);

setTodos(deleteList)
    }

    const addTodo = (title) => {
        setTodos([...todos, { title, id: Math.random() }])
    } 

    return(
        <div>
        <div classeName="body">
            <p className="rq">Remarque : click on the text IN the todo box to edit your todo</p>
        </div>
        <div className="Todo-placement" >
            
           <ul>
              {todos.map(todo => {
                  return (
                      <div className="TODOS">
                       <p contenteditable="true" id="textarea" className="todos-phrases" key={todo.id}>{todo.title}</p>
                       <button type="button" className="delete-button" onClick={() =>handleRemove(todo.id)}>Delete ?</button> 
                       
                     
                       </div>
              )})}
           </ul>
           <ToDoNew addTodo={addTodo}/>
           
           </div>
        </div>
    )
}

export default TodoList