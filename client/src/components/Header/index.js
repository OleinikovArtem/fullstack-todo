import React, { useState } from 'react'


const Header = () => {
  const [value, setValeu] = useState('')


  const changeValue = ({ target: { value } }) => setValeu(value)
  const addTodo = ({ keyCode }) => {
    if (keyCode === 13 && value) {
      // ....
      setValeu('')
    }
  }

  return (
    <header className="header">
      <h1>Todo App!</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={value}
        onChange={e => changeValue(e)}
        onKeyUp={addTodo}
      />
    </header>
  )
}


export default Header