const { Mongoose } = require("mongoose")
const { TodoModel } = require("../models/Todo")


/**
 * GET /api/todos
 * Get all todos
 */
exports.getTodos = (req, res, next) => {
  TodoModel.find({}).then(todos => res.json(todos))
}

/**
 * POST /api/todos
 * Create todo
 * @param {body: {title: String}} req
 */
exports.createTodo = async (req, res, next) => {
  const { title } = req.body
  const todo = new TodoModel({
    title: title,
    completed: false
  })
  todo.save()
    .then(todo => {
      res.status(201).json('Todo is created!')
    })
    .catch(console.log)
}



/**
 * POST /api/todos/:id?edit=true
 * Edit todo
 * @param {body: {title: String, completed:Boolean}} req
 * @param {query: {edit: Boolean }} req
 * 
 * POST 
 * Delet todo /api/todos/:id?del=true
 * @param {query: {del:Boolean}} req
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
          throw Error(err.message)
        } else {
          res.status(201).json(`Todo is updated!`)
        }
      })
  }

  if (del) {
    TodoModel.deleteOne(_id, (err) => {
      if (err) {
        res.status(400).json(err.message)
      } else {
        res.status(202).json('todo is deleted')
      }
    })
  }

}
