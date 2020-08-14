import React from 'react'
import { useState } from 'react'

export const TodoItem = ({ _id, title, completed }) => {
  const [edit, setEdit] = useState(false)

  const handlerEditOn = () => {
    setEdit(true)
  }

  const handleDelite = () => {
    
  }

  return (
    <li className={edit ? 'editing' : completed ? 'completed' : ''} onDoubleClick={handlerEditOn}>
      <div className="view">
        <input className="toggle" type="checkbox" defaultChecked={completed ? true : false} />
        <label >{title}</label>
        <button className="destroy"></button>
      </div>
      <input type="text" className="edit" defaultValue={title} />
    </li>
  )
}
