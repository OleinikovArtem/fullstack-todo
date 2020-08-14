const express = require('express')
const env = require('env-var')
const app = express()

const mongoose = require('mongoose')


const todoRouter = require('./server/routes/todo')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/api/todos', todoRouter)


const startServer = () => {
  const port = env.get('PORT').default('5000').asPortNumber()
  app.listen(port, () => {
    console.log(`Server running at: http://localhost:${port}/`)
  })
}

const connectDb = () => {
  const password = env.get('PASS').default('3LuhEcYQH7eisF0Q').asString()
  mongoose.connect(`mongodb+srv://admin:${password}@cluster0-maihb.mongodb.net/db?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  return mongoose.connection
}

connectDb()
  .on('error', console.log)
  .on('disconnected', connectDb)
  .once('open', startServer)