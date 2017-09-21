var express = require('express')
var router = express.Router()

const User = require('../dbModels/userModel');

// Home page route
router.post('/register', function (req, res) {
  res.send('register user')
});

// About page route
router.get('/profile', function (req, res) {
   
    

  res.send('user profile')

});

module.exports = router