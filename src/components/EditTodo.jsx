import React, { useRef } from 'react'
import { useTodo } from '../hook/TodoHook';

function EditTodo({id}) {
    const {updateTodo} = useTodo()
    const ref  = useRef()
    const handleFormSubmit = (e)=>{
      e.preventDefault();
      const formData = new FormData(e.target)
      const todo = formData.get(`${id}`)
      updateTodo(id,todo)
      ref.current.value = ""
    }
  
    return (
      <form onSubmit={handleFormSubmit} className='flex flex-row items-center'>
          <input ref={ref} required type="text" name={`${id}`} className="bg-white placeholder-slate-400 rounded-l-md rounded-r-none focus:outline-none focus:border-indigo-500 border focus:ring-indigo-500 p-2" placeholder="Edit" />
          <button className="bg-indigo-700 text-white shadow hover:bg-indigo-500  p-[0.58rem] rounded-l-none rounded-r-md">Edit</button>
      </form>
    )
}

export default EditTodo