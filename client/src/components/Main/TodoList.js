import React, { useEffect, useReducer } from 'react'
import { initialState, reducer } from '../../reducers'
import { fetchTodosError, fetchTodosRequest, fetchTodosSuccess } from '../../reducers/actions'
import { fetchAllTodos } from '../../util/Api'
import { TodoItem } from './TodoItem'

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { todos, isFetchingTodos } = state

  useEffect(() => {
    dispatch(fetchTodosRequest())
    fetchAllTodos()
      .then(todos => dispatch(fetchTodosSuccess(todos)))
      .catch(err => fetchTodosError(err))
  }, [])

  if (isFetchingTodos) {
    return <p>Loading...</p>
  }

  return (
    <ul className="todo-list">
      {todos?.map(todo => <TodoItem key={todo._id} {...todo}/>)}
    </ul>
  )
}

export default TodoList