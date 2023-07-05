const passport = require('passport')
const googlestrategy = require('passport-google-oauth20').Strategy

passport.use(googlestrategy({
    clientID:process.env.clientID,
    clientSecret:process.env.clientSecret,
    callbackURL:'',
    scope:["profile", "email"]
}, async ()=>{

}))