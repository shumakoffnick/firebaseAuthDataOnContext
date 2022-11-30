import React from 'react'

const TodoItem = ({todo, toggleComplete, deleteTodo}) => {
  return (
    <li>
        <div>
            <input onChange={()=> toggleComplete(todo)} type="checkbox" checked={todo.completed ? 'checked' : ''}/>
            <p>{todo.text}</p>
        </div>
        <button onClick={()=> deleteTodo(todo.id)}>Trash</button>
    </li>
  )
}

export default TodoItem