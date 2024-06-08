import { createContext, useContext, useState } from "react";

const todoContext = createContext()

export const TodoProvider = ({children})=>{
    const [todoLists, setTodoLists] = useState([
        { id:1, todo: "Grocery Shopping", isDone: false },
        { id:2, todo: "Workout Routine", isDone: true   },
        { id:3, todo: "Study for Exam", isDone: false   }
    ]);
    
    const toggleTodo = (id)=>{
        const todo = todoLists.filter(todo=>todo.id === id)
        todo[0].isDone =!todo[0].isDone;
        setTodoLists([...todoLists])
    }
    const addTodo = (todo)=>{
        const newTodo = { id:todoLists.length+1, todo:todo,isDone:false }
        setTodoLists([...todoLists,newTodo])
    }

    const deleteTodo = (id)=>{
        const updatedTodo = todoLists.filter( todo=> todo.id !== id );
        setTodoLists(updatedTodo);
    }

    const updateTodo = (id,todo) => {
        const getTodo = todoLists.filter( todo => todo.id === id );
        getTodo[0].todo = todo;
        setTodoLists([...todoLists])
    }
    return (
        <todoContext.Provider value={{todoLists,addTodo,deleteTodo,toggleTodo,updateTodo}}>
            {children}
        </todoContext.Provider>
    )
}

export const useTodo = ()=>{
    return useContext(todoContext)
}