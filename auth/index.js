const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const { User } = require('../models');

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.

passport.use(new GoogleStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.SECRET,
  callbackURL: '/auth/google/callback'
},
  function (accessToken, refreshToken, profile, done) {
    done(null, profile);
  }
));


passport.serializeUser(function (user, done) {
  done(null, user._json.email);
});

passport.deserializeUser(function (email, done) {
  return done(null, email);
});


module.exports = passport;