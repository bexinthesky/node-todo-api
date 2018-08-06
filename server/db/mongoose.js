var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// let db = {
//     localhost: 'mongodb://localhost:27017/TodoApp',
//     mlab: 'mongodb://test:testing123@ds018568.mlab.com:18568/todo-app-api'
// };
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');
// mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = { mongoose };