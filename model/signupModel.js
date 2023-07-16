const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

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

  userschema.pre("save", async function(){
    const hash = await bcrypt.genSalt(10)
    this.password = bcrypt.hash(this.password, hash)
  })

const usermodel= mongoose.model('Users', userschema)
const oauthmodel = mongoose.model('Oauth', oauthSchema)
module.exports = {
    usermodel,oauthmodel
}