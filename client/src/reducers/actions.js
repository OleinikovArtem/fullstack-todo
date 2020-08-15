export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST'
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS'
export const FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR'

export const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST'
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS'
export const ADD_TODO_ERROR = 'ADD_TODO_ERROR'

export const DELETE_TODO_REQUEST = 'DELETE_TODO_REQUEST'
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS'
export const DELETE_TODO_ERROR = 'DELETE_TODO_ERROR'

export const UPDATE_TODO_REQUEST = 'UPDATE_TODO_REQUEST'
export const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS'
export const UPDATE_TODO_ERROR = 'UPDATE_TODO_ERROR'

export const fetchTodosRequest = () => ({ type: FETCH_TODOS_REQUEST })
export const fetchTodosSuccess = (payload) => ({ type: FETCH_TODOS_SUCCESS, payload: payload })
export const fetchTodosError = (payload) => ({ type: FETCH_TODOS_ERROR, payload })

export const addTodoRequest = () => ({ type: ADD_TODO_REQUEST })
export const addTodoSuccess = () => ({ type: ADD_TODO_SUCCESS })
export const addTodoError = (payload) => ({ type: ADD_TODO_ERROR, payload })

export const updateTodoRequest = (payload) => ({ type: UPDATE_TODO_REQUEST, payload })
export const updateTodoSuccess = () => ({ type: UPDATE_TODO_SUCCESS })
export const updateTodoError = (payload) => ({ type: UPDATE_TODO_ERROR, payload })

export const deleteTodoRequest = () => ({ type: DELETE_TODO_REQUEST })
export const deleteTodoSuccess = () => ({ type: DELETE_TODO_SUCCESS })
export const deleteTodoError = (payload) => ({ type: DELETE_TODO_ERROR, payload })