const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b6206af35cf9880201177f2';

// validate an object id
// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// find() example
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });


// findOne() example
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });


// findById() example
// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

User.findById('5b33c1fb00dae70b05c31c9a').then((user) => {
    if (!user) {
        return console.log('Unable to find user');
    }

    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
}); 