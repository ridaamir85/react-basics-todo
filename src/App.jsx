import { useEffect, useState } from 'react'
import TodoForm from './components/TodoForm.jsx'
import TodoItem from './components/TodoItem.jsx'

function getStartingTodos() {
  const savedTodos = localStorage.getItem('react-todos')
  return savedTodos ? JSON.parse(savedTodos) : []
}

export default function App() {
  const [todos, setTodos] = useState(getStartingTodos)

  useEffect(() => {
    localStorage.setItem('react-todos', JSON.stringify(todos))
  }, [todos])

  function addTodo(text) {
    const newTodo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    }
    setTodos((currentTodos) => [...currentTodos, newTodo])
  }

  function toggleTodo(id) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    )
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id))
  }

  const completedCount = todos.filter((todo) => todo.completed).length

  return (
    <main className="app">
      <header>
        <p className="eyebrow">React basics project</p>
        <h1>My Todo List</h1>
        <p className="summary">
          {completedCount} of {todos.length} tasks completed
        </p>
      </header>

      <TodoForm onAddTodo={addTodo} />

      {todos.length === 0 ? (
        <p className="empty-message">No tasks yet. Add your first task above.</p>
      ) : (
        <ul className="todo-list">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))}
        </ul>
      )}
    </main>
  )
}
