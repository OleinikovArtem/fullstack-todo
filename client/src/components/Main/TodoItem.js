import React, { useReducer } from 'react'
import { useState } from 'react'
import { initialState, reducer } from '../../reducers'
import { deleteTodoRequest, deleteTodoSuccess, updateTodoError, updateTodoRequest, updateTodoSuccess, } from '../../reducers/actions'
import { fetchDeleteTodo, fetchUpdateTodo } from '../../util/Api'

export const TodoItem = ({ _id, title, completed }) => {
  const [edit, setEdit] = useState(false)
  const [value, setValue] = useState(title)
  const [state, dispatch] = useReducer(reducer, initialState)

  const handlerEditOn = () => setEdit(true)

  const handlerDelete = () => {
    dispatch(deleteTodoRequest())
    fetchDeleteTodo(_id)
      .then(res => dispatch(deleteTodoSuccess))
      .catch(err => dispatch(deleteTodoSuccess(err)))
  }

  const handlerUpdate = () => {
    dispatch(updateTodoRequest())
    fetchUpdateTodo({ _id, completed: !completed, title: value })
      .then(res => updateTodoSuccess)
      .catch(err => updateTodoError(err))
  }


  return (
    <li
      className={edit ? 'editing' : completed ? 'completed' : ''}
      onDoubleClick={handlerEditOn}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={handlerUpdate}
        />
        <label>{value}</label>
        <button
          className="destroy"
          onClick={handlerDelete}>
        </button>
      </div>
      <input
        type="text"
        className="edit"
        defaultValue={value}
      />
    </li>
  )
}
