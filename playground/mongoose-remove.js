const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// remove everything
// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// remove first document 
//Todo.findOneAndRemove

// pass in id as argument and remove it
//Todo.findByIdAndRemove

Todo.findByIdAndRemove('5b80587a613075ae80567066').then((todo) => {
    console.log(todo);
});