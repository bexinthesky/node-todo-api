// const MongoClient = require('mongodb').MongoClient; destructured below ↓↓↓↓↓↓↓↓↓
// const { MongoClient, ObjectID } = require('mongodb');

// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
//     if (err) {
//         return console.log('Unable to connect to MongoDB server');
//     }
//     console.log('Connected to MongoDB server');
//     const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     test: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // Insert new doc intro Users (name, age, location)
    //     db.collection('Users').insertOne({
    //         name: 'Usagi',
    //         age: '21',
    //         location: 'Azabu-Jūban'
    //     }, (err, result) => {
    //         if (err) {
    //             return console.log('Unable to insert user', err);
    //         }

    //         console.log(result.ops[0]._id.getTimestamp());
    //     });

    //     client.close();
// });

// Example of object destructuring
// var user = { name: 'usagi', age: 21 };
// var { name } = user;
// console.log(name);