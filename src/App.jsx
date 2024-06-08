import TodoForm from "./components/TodoForm";
import TodoLists from "./components/TodoLists";

export default function App() {
  return (
    <div className="h-screen flex flex-col space-y-5 p-4 container mx-auto">
      <TodoForm/>
      <TodoLists/>
    </div>
  )
}