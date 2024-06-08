import React from 'react'
import { useTodo } from '../hook/TodoHook'

function TodoForm() {
  const {addTodo} = useTodo()

  const handleFormSubmit = (e)=>{
    e.preventDefault();
    addTodo(e.target.todo.value)
    e.target.todo.value = ''
  }

  return (
    <form onSubmit={handleFormSubmit} className='flex flex-row items-center'>
        <input required type="text" name="todo" className="bg-white placeholder-slate-400 rounded-l-md rounded-r-none focus:outline-none focus:border-indigo-500 border focus:ring-indigo-500 p-2" placeholder="todo" />
        <button className="bg-indigo-700 text-white shadow hover:bg-indigo-500  p-[0.58rem] rounded-l-none rounded-r-md">ADD</button>
    </form>
  )
}

export default TodoForm