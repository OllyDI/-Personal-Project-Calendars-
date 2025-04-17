var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var app = express();

var cors = require('cors');
var flash = require('connect-flash');
var session = require('express-session')
var mysqlStore = require('express-mysql-session')(session);
var mysql = require('mysql')
var crypto = require('crypto');
var passport = require('passport');
require("dotenv").config({ path: "lib/settings.env" })

// 데이터베이스 설정
const options = {
  host: process.env.DB_HOST, 
  port: process.env.DB_PORT,
  user: process.env.DB_ID,
  password: process.env.DB_PW,
  database: process.env.DB_NAME
}
const db = mysql.createConnection(options);
const sessionStore = new mysqlStore(options);


// 세션 설정
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  store: sessionStore,
  cookie: { 
    httpOnly: true,
    secure: false,
    maxAge: 30 * 60 * 1000 // 1000: 1초 -> 30분
  }
}));
app.use(passport.authenticate('session'));
app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin: "http://localhost:3005",
    credentials: true,
  })
);
app.use(flash());


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);
app.use('/users', users);
require('./lib/passport')(passport, options); // 패스포트



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
