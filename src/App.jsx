import { useState, useEffect } from 'react'
import './App.css'
import TodoItem from './TodoItem'

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos')
    return saved ? JSON.parse(saved) : []
  })
  const [newTodo, setNewTodo] = useState('')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  function addTodo() {
    if (newTodo.trim() === '') return
    setTodos([...todos, { id: crypto.randomUUID(), title: newTodo, completed: false }])
    setNewTodo('')
  }

  function toggleTodo(id) {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  }

  function deleteTodo(id) {
    setTodos(todos.filter(t => t.id !== id))
  }

  return (
    <div className="app">
      <h1>My Todo List</h1>

      <div className="todo-form">
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a todo"
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>

      <ul className="todo-list">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  )
}

export default App