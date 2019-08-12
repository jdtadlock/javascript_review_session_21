require('dotenv').config();
const express = require('express');
const path = require('path');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const auth_routes = require('./routes/auth_routes');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(cookieParser());
// Parse body information from a form through the request object
// request.body is added to the request object in all requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', auth_routes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(PORT, () => console.log('Listening on port %s ', PORT));