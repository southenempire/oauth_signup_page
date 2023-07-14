const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
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

const oauthSchema = new mongoose.Schema({
    googleID:{
        type: String,
        required: true
    },
    namw:{
        type: String,
        required: true
    },
    photos:{
        type: String,
        required: true
    }
  });

const usermodel= mongoose.model('Users', userschema)
const oauthmodel = mongoose.model('Oauth', oauthSchema)
module.exports = {
    usermodel,oauthmodel
}