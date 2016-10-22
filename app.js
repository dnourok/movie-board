var app = require('express')();
var http = require('http').Server(app);

// var server = http.createServer(function(req, res) {
//   res.writeHead(200);
//   res.end('Hello Http');
// });
// server.listen(8080);
// console.log("You're port is open");

app.get('/', function(req, res){
  res.sendfile('index.html');
});

http.listen(8080, function(){
  console.log('listening on *:8080');
});