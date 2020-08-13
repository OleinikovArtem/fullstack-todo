const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin:3LuhEcYQH7eisF0Q@cluster0-maihb.mongodb.net/<dbname>?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

const Todo = mongoose.model('todo', { title: String, completed: Boolean });

const newTodo = new Todo({ title: 'Test connect' });
newTodo.save().then(() => console.log('meow'));