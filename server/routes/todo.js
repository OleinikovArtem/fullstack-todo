const express = require('express')
const router = express.Router()

const { getTodos, createTodo, updateTodo } = require('../controllers/todo')

router.get('/', getTodos)

router.post('/', createTodo)
router.post('/:id', updateTodo)

module.exports = router
