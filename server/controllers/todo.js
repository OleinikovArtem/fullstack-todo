const { TodoModel } = require("../models/Todo")


/**
 * GET /api/todos
 * Get all todos
 * 
 * GET /api/todos?filter=true&completed=flag
 * @param {query: {filter: true, completed: Boolean}}
 * Get all todos
 */
exports.getTodos = (req, res, next) => {
  const { completed, filter } = req.query
  const config = {}
  if (filter) {
    config.completed = completed
  }
  TodoModel.find(config)
    .then(todos => res.json(todos))
    .catch(err => res.status(404).json(err.message))
}


/**
 * POST /api/todos
 * Create todo
 * @param {body: {title: String}} req
 */
exports.createTodo = async (req, res, next) => {
  const { title } = req.body
  if (!req.query.hasOwnProperty("completed")) {
    const todo = new TodoModel({
      title: title,
      completed: false
    })
    todo.save()
      .then(todo => {
        res.status(201).json('Todo is created!')
      })
      .catch(console.log)
  } else {
    next()
  }
}


/**
 * POST /api/todos?completed=flag
 * Create todo
 * @param {query: {completed: Boolean}} req
 */
exports.updateAllTodo = async (req, res, next) => {
  const { completed } = req.query
  if (req.query.hasOwnProperty("completed")) {
    TodoModel.updateMany({}, { completed }, (err) => {
      if (err) {
        return res.status(402).json(err.message)
      }
      return res.status(202).json({ uptadedTodos: true, completed: completed})
    })
  } else {
    next()
  }
}


/**
 * POST /api/todos/:id?edit=true
 * Edit todo
 * @param {query: {edit: Boolean }} req
 * @param {body: {title: String, completed:Boolean}} req
 * 
 * POST 
 * Delet todo /api/todos/:id?del=true
 * @param {query: {del: Boolean}} req
 */
exports.updateTodo = (req, res, next) => {
  const { edit, del } = req.query
  const { title, completed, _id } = req.body

  if (edit) {
    TodoModel.findOneAndUpdate(
      _id,
      { title: title, completed: completed },
      (err, result) => {
        if (err) {
          return res.status(402).json(err.message)
        } else {
          return res.status(201).json(`Todo is updated!`)
        }
      })
  }

  if (del) {
    TodoModel.deleteOne(_id, (err) => {
      if (err) {
        return res.status(402).json(err.message)
      } else {
        return res.status(202).json('todo is deleted')
      }
    })
  }
}
