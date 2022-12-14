const mongoose = require('mongoose');


const connectMongoDB = ()=>{
    mongoose.connect('mongodb://localhost:27017/contacts')
    .then(()=>{
        console.log('DB connected successfully.')
    })
    .catch((err)=>{
        console.log('Error occured while connecting to db ',err);
    })
}

module.exports = {connectMongoDB};




