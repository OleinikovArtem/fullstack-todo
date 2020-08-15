import {
  ADD_TODO_ERROR,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  DELETE_TODO_ERROR,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  FETCH_TODOS_ERROR,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  UPDATE_TODO_ERROR,
  UPDATE_TODO_REQUEST,
  UPDATE_TODO_SUCCESS
} from "./actions";

export const initialState = {
  todos: [],
  isFetchingTodos: false,
  isErrorTodos: null,
}

export const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return {
        ...state,
        isFetchingTodos: true,
        isErrorTodos: null,
      }
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload,
        isFetchingTodos: false,
        isErrorTodos: null,
      }
    case FETCH_TODOS_ERROR:
      return {
        ...state,
        isFetchingTodos: false,
        isErrorTodos: action.payload,
      }


    case ADD_TODO_REQUEST:
      return {
        ...state,
        isFetchingTodos: true,
      }
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        isFetchingTodos: false,
        isErrorTodos: null,
      }
    case ADD_TODO_ERROR:
      return {
        ...state,
        isFetchingTodos: false,
        isErrorTodos: action.payload,
      }


    case UPDATE_TODO_REQUEST:
      return {
        ...state,
        isFetchingTodos: true,
      }
    case UPDATE_TODO_SUCCESS:
      return {
        ...state,
        isFetchingTodos: false,
        isErrorTodos: null,
      }
    case UPDATE_TODO_ERROR:
      return {
        ...state,
        isFetchingTodos: false,
        isErrorTodos: action.payload,
      }


    case DELETE_TODO_REQUEST:
      return {
        ...state,
        isFetchingTodos: true,
      }
    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        isFetchingTodos: false,
        isErrorTodos: null,
      }
    case DELETE_TODO_ERROR:
      return {
        ...state,
        isFetchingTodos: false,
        isErrorTodos: action.payload,
      }

    default: return state
  }
}