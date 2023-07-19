import { Profile, VerifyCallback } from "passport-google-oauth20";

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const {oauthmodel} = require('../model/signupModel'); 

const User = oauthmodel
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '"http://localhost:3000/google/callback"',
    },
    async (accessToken:string, refreshToken:string, profile:Profile, done:VerifyCallback) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }
      const newUser = new User({
        googleId: profile.id,
        Name: profile.displayName,
        photos: profile.photos[0].value
      });
      await newUser.save();
      done(null, newUser);
    }
  )
);

interface User{
  id:string
}
passport.serializeUser((user:User, done:VerifyCallback)=> {
  done(null, user.id);
});

passport.deserializeUser(async (id:string, done:VerifyCallback) => {
  const user = await User.findById(id);
  done(null, user);
});
