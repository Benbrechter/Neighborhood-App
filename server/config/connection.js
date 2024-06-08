const mongoose = require('mongoose');
// const MongoClient = require('mongodb').MongoClient;
// const dotenv = require('dotenv')

// const username = 'YOUR_USERNAME';
// const password = 'YOUR_PASSWORD';
// const hosts = 'iad2-c18-2.mongo.objectrocket.com:52084,iad2-c18-1.mongo.objectrocket.com:52084,iad2-c18-0.mongo.objectrocket.com:52084';
// const database = 'YOUR_DATABASE_NAME';
// const options = '?replicaSet=64f17e1a61dc4a35a29b31cce8a57a59';
// const connectionString = 'mongodb://' + username + ':' + password + '@' + hosts + '/' + database + options;

// MongoClient.connect(connectionString, function(err, db) {
//     if (db) {
//         db.close();
//     }
//     if (err) {
//         console.log('Error: ', err);
//     } else {
//         console.log('Connected!');
//         process.exit();
//     }
// });

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/Neighborhood-app');

module.exports = mongoose.connection;