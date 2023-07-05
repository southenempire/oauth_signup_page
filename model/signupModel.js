const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name:{
        type:String,
        required: true  
    },
    email:{
        type:String,
        required: [true,'provide an email']
    },
    password:{
        type:String,
        required:[true, 'provide a password']

    }
})

module.exports = mongoose.model('Users', schema)