var express = require('express');
var router = express.Router();
var path = require('path');
const { auth } = require('../lib/auth');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, "../react/build"))
});

router.get('/login', function(req, res, next) {
  res.sendFile(path.join(__dirname, "../views/members/login.html"))
});

router.get('/login2', function(req, res, next) {
  res.sendFile(path.join(__dirname, "../views/login2"))
});

router.get('*', function(req, res, next) {
  res.sendFile(path.join(__dirname, "../react/build/index.html"))
})
module.exports = router;
