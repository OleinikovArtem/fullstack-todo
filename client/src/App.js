import React, { useState, useEffect } from 'react'

function App() {
  const [todos, setTodos] = useState(null)
  useEffect(() => {
    fetch('/api/todos', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        return res.json()
      })
      .then(todos => setTodos(todos))
      .then(console.log)
      .catch(err => console.log(err.message))
  }, [])
  console.log(todos)
  return (
    <div className="App">
      <code>
        {JSON.stringify(todos, null, 2)}
      </code>
    </div>
  )
}

export default App
