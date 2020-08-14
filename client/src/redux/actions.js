import { REQUEST_TODOS } from "./types"

export function fetchTodos() {
  return { type: REQUEST_TODOS}
}

// export function fetchAddTodo(value) {
//   return async dispatch => {
//     const respons = await fetch('/api/todos', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ title: value })
//     })
//   }
// }


// export function fetchDeleteTodo(id) {
//   return async dispatch => {
//     const respons = await fetch(`/api/todos/${id}?del=true`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//     })

//   }
// }