import { useState } from 'react'

export default function TodoForm({ onAddTodo }) {
  const [text, setText] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const cleanText = text.trim()

    if (!cleanText) return

    onAddTodo(cleanText)
    setText('')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label htmlFor="todo-input">New task</label>
      <div className="input-row">
        <input
          id="todo-input"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="What do you need to do?"
        />
        <button type="submit">Add task</button>
      </div>
    </form>
  )
}
