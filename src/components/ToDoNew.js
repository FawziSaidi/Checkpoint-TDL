import React, { useState } from 'react';

const ToDoNew = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const handleSubmit = (x) => {
        x.preventDefault();
        addTodo(title);
        setTitle("");
    }
    return(

        <form onSubmit={handleSubmit} className="Todo-input" >
            <input className="write-your-input" type="text" placeholder="cht7eb ta3mel ?" value={title} required onChange={(props)=> setTitle(props.target.value)}/>
            <input className="Add-button" type="submit" value="Add"></input>
            
        </form>
    )
}

export default ToDoNew
