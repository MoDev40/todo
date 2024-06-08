import React from 'react'
import Todo from './Todo'
import {useTodo} from "../hook/TodoHook.jsx"
function TodoLists() {
  const {todoLists} = useTodo()
  return (
    <div className='flex flex-col space-y-5'>
        {
            todoLists.map(todo => (
                <Todo key={todo.id} todo={todo}/>
            ))
        }
    </div>
  )
}

export default TodoLists