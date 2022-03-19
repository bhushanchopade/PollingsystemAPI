const mongoose = require('mongoose');

var url = process.env.DATABASEURL ;

mongoose.connect(url, {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', () => console.log('Connected to Database :: MongoDB'));


module.exports = db;
