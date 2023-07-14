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
    provider: String,
    providerId: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  });

module.exports = mongoose.model('Users', userschema)
module.exports = mongoose.model('Oauth', oauthSchema)