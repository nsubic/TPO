require('dotenv').load();
var mysql = require('mysql');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');


//var index = require('./app_server/routes/index');
var indexApiGet = require('./app_api/routes/get');
var indexApiPost = require('./app_api/routes/post');
var indexApiDelete = require('./app_api/routes/delete');
var indexApiPut = require('./app_api/routes/put');

var app = express();

// view engine setup

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app_client')));

app.use(function(req, res, next){
	global.connection = mysql.createConnection({
    host: "sql2.freemysqlhosting.net",
    user: "sql2229375",
    password: "eW2!jB2%",
    database:"sql2229375"
	});
	connection.connect()
 
	next();
});

//app.use('/', index);
app.use('/api', indexApiGet);
app.use('/api', indexApiPost);
app.use('/api', indexApiDelete);
app.use('/api', indexApiPut);

app.use(function(req, res) {
  res.sendFile(path.join(__dirname, 'app_client', 'index.html'));
});

// Obvladovanje napak zaradi avtentikacije
app.use(function(err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
 res.status(401);
 res.json({"sporočilo": err.name + ": " + err.message});
  }
});

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
