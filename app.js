var app = require('express')();
var http = require('http').Server(app);
var request = require('request');

app.get('/', function(req, res){
  res.sendfile('index.html');
});

http.listen(8080, function(){
  console.log('listening on *:8080');
});
