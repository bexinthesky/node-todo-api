var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

// var newTodo = new Todo({
//     text: 'Blend smoothie'
// });

var newTodoTwo = new Todo({
    text: 'Check out new Muse song',
    completed: true,
    completedAt: 14
});

// newTodo.save().then((doc) => {
//     console.log('Saved doc', doc);
// }, (e) => {
//     console.log('Unable to save todo');
// });

newTodoTwo.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
    console.log('Unable to save new todo', e);
});
