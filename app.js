var express = require('express');
var request = require('request');
var fs = require('fs');
var middleware = require('middleware');
var path = require('path');
var app = express();

app.get('/', function(req, res){
  res.sendfile('index.html');
});

app.use('/public/style.css', express.static(path.join(__dirname, '/public/style.css')));
app.use('/public/index.js', express.static(path.join(__dirname, '/public/index.js')));




app.listen(8080, function(){
  console.log('listening on *:8080');
});
