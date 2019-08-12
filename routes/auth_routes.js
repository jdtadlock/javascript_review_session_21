const router = require('express').Router();
const { User } = require('../models');
const passport = require('../auth');

const env = process.env.NODE_ENV;


router.get('/login', passport.authenticate('google',
  { scope: 'https://www.googleapis.com/auth/userinfo.email' }
));

router.get('/google/callback', passport.authenticate('google',
  {
    // successRedirect: 'http:/localhost:3000',
    failureRedirect: '/login'
  }),
  (req, res) => {
    res.redirect(env === 'production' ? '/' : 'http://localhost:3000')
  }
)

router.get('/isauth', (req, res) => {
  res.send({ email: req.user });
});



module.exports = router;