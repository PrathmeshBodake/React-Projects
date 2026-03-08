import { useEffect, useState } from "react";
import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {

  // State to store all todos
  const [todos, setTodos] = useState([]);

  // Add Todo
  const addTodo = (todo) => {
    setTodos([...todos, {
      id: Date.now(),
      title: todo.title,
      completed: false
    }]);
  }

  // Update Todo
  const updateTodo = (id, updatedTitle) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: updatedTitle.title } : todo
      )
    );
  }

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  // Toggle completion
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  // Load todos from localStorage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  // Save todos to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}>
      <div className="bg-[#F6F09F] min-h-screen py-8">
        <div className="w-full bg-slate-600 max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">

          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>

          
          <div className="mb-4">
            <TodoForm />
          </div>

          
          <div className="flex flex-col gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id}>
                <TodoItem todo={todo} />
              </div>
              
            ))}
          </div>

        </div>
      </div>
    </TodoProvider>
  );
}

export default App;