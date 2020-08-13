const Mongoose = require("mongoose")

const todo = new Mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true
  },
  __v: {
    type: Number,
    select: false
  }
})

exports.TodoModel = Mongoose.model("todo", todo)