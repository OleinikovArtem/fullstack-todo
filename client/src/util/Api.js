

export const fetchAllTodos = async () => {
  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  let url = 'api/todos'

  const res = await fetch(url, config)
  const json = await res.json()
  return await json
}

export const fetchCreateTodo = async (title) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title: title })
  }
  let url = 'api/todos/'
  console.log(url)
  const res = await fetch(url, config)
  const json = await res.json()
  return await json
}

export const fetchUpdateTodo = async (todo) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  }
  let url = 'api/todos/' + todo._id + '?edit=true'
  console.log(url)
  const res = await fetch(url, config)
  const json = await res.json()
  return await json
}

export const fetchDeleteTodo = async (id) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  let url = 'api/todos/' + id + '?del=true'
  const res = await fetch(url, config)
  const json = await res.json()
  console.log(url)
  return await json
}

