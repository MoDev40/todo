import { Pen, Trash2 } from 'lucide-react'
import React from 'react'
import { useTodo } from '../hook/TodoHook'
import EditTodo from './EditTodo'

function Todo({todo}) {
  const {deleteTodo,toggleTodo} = useTodo()
  return (
    <div className='flex shadow-md p-5 rounded flex-row justify-between space-x-3 items-center'>
      <div className='flex flex-row space-x-3'> 
        <input onClick={()=>{toggleTodo(todo.id)}} defaultChecked={todo.isDone}  type="checkbox" />
        <h2 className={`${todo.isDone && 'line-through' } `}>{todo.todo}</h2>
      </div>
      <div className='flex flex-row items-center space-x-3'>
          { !todo.isDone &&
            <EditTodo id={todo.id}/>
          }
          <Trash2 onClick={()=>{deleteTodo(todo.id)}} color='red' size={20}/>
      </div>
    </div>
  )
}

export default Todo