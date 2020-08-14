import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FETCH_TODOS } from '../../redux/types'
import { TodoItem } from './TodoItem'

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todoList)

  return (
    <ul className="todo-list">
      {todos?.map(todo => <TodoItem key={todo._id} {...todo} />)}
    </ul>
  )
}


export default TodoList