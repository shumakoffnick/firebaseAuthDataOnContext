import React, { useState, useEffect } from 'react'
import TodoItem from './TodoItem'

import { db } from '../firebase'
import {query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc} from 'firebase/firestore'


const Todo = () => {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')
    const createTodo = async(e)=>{
        e.preventDefault()
        if(input === ''){
            alert('Please enter input value')
            return
        }
        await addDoc(collection(db, 'todos' ), {
            text: input,
            completed: false
        })
        setInput('')
    }

    useEffect(()=>{
const q = query(collection(db, 'todos'))
const unsubscribe = onSnapshot(q, (querySnapshot) =>{
    let todosArr = []
    querySnapshot.forEach((doc) => {
        todosArr.push({...doc.data(), id: doc.id})
    });
    setTodos(todosArr)
})
return () =>unsubscribe()
    }, [])
    

    const toggleComplete = async (todo)=>{
        await updateDoc(doc(db, 'todos', todo.id), {
            completed: !todo.completed
        })
    }


    const deleteTodo = async (id)=>{
        await deleteDoc(doc(db, 'todos', id))
    }

  return (
    <div>
        <h1>ToDo app</h1>
        <form onSubmit={createTodo}>
            <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder='Введите списоок значений' />
            <button>Нажать</button>
        </form>
        <ul>
            {todos.map((todo, index)=> <TodoItem key={index} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>)}
        </ul>
        {todos.length < 1 ? null : <p>{`You have ${todos.length} todos`}</p>}        
    </div>
  )
}

export default Todo