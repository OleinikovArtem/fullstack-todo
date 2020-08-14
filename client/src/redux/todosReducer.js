import { CREATE_TODO, FETCH_TODOS } from "./types"

const initialState = {
  todoList: [],

}

export const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_TODO:
      return { ...state, todoList: [...state.todoList, payload] }
    case FETCH_TODOS:
      return { ...state, todoList: payload }
    default: return state
  }
}