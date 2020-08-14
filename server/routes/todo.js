const express = require('express')
const router = express.Router()

const { getTodos, createTodo, updateTodo, updateAllTodo } = require('../controllers/todo')

router.get('/', getTodos)

router.post('/', updateAllTodo)
router.post('/', createTodo)
router.post('/:id', updateTodo)

module.exports = router
