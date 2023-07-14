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
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }
      const newUser = new User({
        googleId: profile.id,
        displayName: profile.displayName,
      });
      await newUser.save();
      done(null, newUser);
    }
  )
);


passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});
