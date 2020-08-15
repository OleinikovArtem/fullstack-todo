import React, { useReducer, useState } from 'react'
import { initialState, reducer } from '../../reducers'
import { addTodoError, addTodoRequest, addTodoSuccess } from '../../reducers/actions'
import { fetchCreateTodo } from '../../util/Api'


const Header = () => {
  const [value, setValeu] = useState('')
  const [state, dispatch] = useReducer(reducer, initialState)

  const changeValue = ({ target: { value } }) => setValeu(value)
  const handleAddTodo = ({ keyCode }) => {
    if (keyCode === 13 && value) {
      dispatch(addTodoRequest())
      fetchCreateTodo(value)
        .then(res => dispatch(addTodoSuccess()))
        .catch(err => dispatch(addTodoError(err)))
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
        onKeyUp={handleAddTodo}
      />
    </header>
  )
}


export default Header