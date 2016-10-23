var app = require('express')();
var http = require('http').Server(app);
var request = require('request');

app.get('/', function(req, res){
  res.sendfile('index.html');

});


// request({
//     url: 'http://api.themoviedb.org/3/', //URL to hit
//     qs: {from: 'blog example', time: +new Date()}, //Query string data
//     method: 'GET', //Specify the method
//     headers: { //We can define headers too
//         'Content-Type': 'application/json',
//         'apikey': '?api_key=c07bb825bc25d93f2608eb1883a674e4',
//     }
// }, function(error, response, body){
//     if(error) {
//         console.log(error);
//     } else {
//         console.log(response.statusCode, body);
//     }
// });

// var dbKey = '?api_key=c07bb825bc25d93f2608eb1883a674e4';
// request.post({url:'http://api.themoviedb.org/3/', form: {key: dbKey}}, 
// 	function(err,httpResponse,body){ 
//     console.log('working')
// 	});


// var request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Show the HTML for the Google homepage.
//   }
// })


// var options = {
//   host: 'www.google.com',
//   port: 80,
//   path: '/upload',
//   method: 'POST'
// };
// var req = http.request(options, function(res) {
//   console.log('STATUS: ' + res.statusCode);
//   console.log('HEADERS: ' + JSON.stringify(res.headers));
//   res.setEncoding('utf8');
//   res.on('data', function (chunk) {
//     console.log('BODY: ' + chunk);
//   });
// });

// req.on('error', function(e) {
//   console.log('problem with request: ' + e.message);
// });

// // write data to request body
// req.write('data\n');
// req.write('data\n');
// req.end();

// app.get('http://api.themoviedb.org/3/',function(req,res){
// 				mode = 'search/movie',
//         input,
//         movieName,
//         key = '?api_key=c07bb825bc25d93f2608eb1883a674e4';

// });


http.listen(8080, function(){
  console.log('listening on *:8080');
});


// var title = data.Title
// var year = data.Year
// var langauge = data.Language
// var rottenTomatoesRating = data.tomatoRating
// var awards = data.Awards
// var website = data.Website
// var imdbRating = data.imdbRating
// var genre = data.Genre
// var plot = data.Plot
// var poster = data.Poster
// var actors = data.Actors