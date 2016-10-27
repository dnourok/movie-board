var express = require('express');
var request = require('request');
var fs = require('fs');
var middleware = require('middleware');
var path = require('path');
var cors = require('cors')
var app = express();


// app.use(cors());

app.get('/', function(req, res, next){
  res.sendfile('index.html');
});


// app.use('/', function(req, res, next) {
// 	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   res.header('Access-Control-Allow-Origin', "*");
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');

//   console.log('using cors')
//   next();
// });



app.use('/public/style.css', express.static(path.join(__dirname, '/public/style.css')));
app.use('/public/index.js', express.static(path.join(__dirname, '/public/index.js')));


app.listen(8080, function(){
  console.log('listening on *:8080');
});
