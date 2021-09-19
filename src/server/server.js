const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());


mongoose.connect('mongodb+srv://admin:uNHn9rNiyoRHfFcw@cluster0.bhp9h.mongodb.net/plenty-react?retryWrites=true&w=majority').then(result => {
    app.listen(3000)
}).catch(err => {
    console.log(err);
})