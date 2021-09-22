const express = require('express');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(authRoutes);

mongoose.connect('mongodb+srv://admin:uNHn9rNiyoRHfFcw@cluster0.bhp9h.mongodb.net/plenty-react?retryWrites=true&w=majority').then(result => {
    app.listen(3001)
}).catch(err => {
    console.log(err);
})