var express = require('express');
var request = require('request');
var fs = require('fs');
var middleware = require('middleware');
var path = require('path');
var app = express();

app.get('/', function(req, res){
  res.sendfile('index.html');
});

app.use(express.static(path.join(__dirname, '/public')));


app.listen(8080, function(){
  console.log('listening on *:8080');
});
