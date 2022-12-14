const express = require("express");
const mongoose = require('mongoose');
const {connectMongoDB} = require('./db/connection');
const Contact = require('./model/contacts'); 
const contactRoute = require('./route/contactRoute');

const app = express();

// making mongoDB connection
connectMongoDB();

// express middleware to parse JSON data
app.use(express.json());

app.use(contactRoute);

app.listen(4000,()=>{
    console.log('App is running on PORT 4000')
});   