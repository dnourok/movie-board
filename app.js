var app = require('express')();
var http = require('http').Server(app);
var request = require('request');
var fs = require('fs');
var middleware = require('middleware');

app.get('/', function(req, res){
  res.sendfile('index.html');
});

app.use('/', function(req, res){
  res.sendfile('./src/index.js');
});

app.use('/', function(req, res){
  res.sendfile('./css/style.css');
});


http.listen(8080, function(){
  console.log('listening on *:8080');
});
