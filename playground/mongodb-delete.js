// const MongoClient = require('mongodb').MongoClient; destructured below ↓↓↓↓↓↓↓↓↓
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    
    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat dinner'}).then((result) => {
    //     console.log(result);
    // });
    db.collection('Users').deleteMany({name: 'Usagi'}).then((result) => {
        console.log(result);
    });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat dinner'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });
    db.collection('Users').findOneAndDelete({ _id: new ObjectID("5b218b2f0145e909c815e812")}).then((result) => {
        console.log(result);
    });

    // client.close();
});
