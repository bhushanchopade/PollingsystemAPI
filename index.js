require('dotenv').config();
const express = require('express');
const db = require('./config/mongoose');
const PORT = process.env.PORT || 8000;
const app = express();

// body-parser
// app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');


app.use(express.static('./assets'));

console.log(process.env.DATABASEURL);

app.use('/', require('./routes'));



app.listen(PORT, (err) => {
    if (err) { console.log(err); return; }
    console.log(`Sever is running on Port: ${PORT}`)
});