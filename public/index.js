// var secrets = require('secrets.json');
// var apiKey = secrets["key"];
// var mlbKey = secrets["mlbKey"];
// console.log(apiKey);
var $card = $('.card');
var $modal = $('.populateModal');
var key = '?api_key=c07bb825bc25d93f2608eb1883a674e4';
var urlPoster = 'http://api.themoviedb.org/3/configuration';
var input = $('#movieSearch').val();
var movieName;
movieName = encodeURI(input);
var url = 'http://api.themoviedb.org/3/';
var mode = 'search/movie';
var mlbUrl = 'http://api.sportradar.us/mlb-t5/games/2016/10/09/schedule.xml';



  function load() {
    bindDeleteButtonEvent(); 
    bindAddMovieToBoard();
    bindClearsMovieCardsInModal();
    bindApiEvent();
  }

  function bindDeleteButtonEvent() {
        $('.row').on('click', '.glyphicon-trash', function(e) {
        e.preventDefault();
        var deleteCard = $(this).closest($("[class^=col-sm-4]"));
        $(deleteCard).remove();
      });
  }

  function bindAddMovieToBoard() {
    $('.populateModal').on('click','.plus-icon', function(e) {
      e.preventDefault();
      var cardToAttach = $(this).closest($("[class^=movieInfo]"));
      $(cardToAttach).appendTo('.row').attr("class", "col-sm-4 updatedMovieInfo")
      $('a.close')[0].click();
      $('.glyphicon-plus').attr('class', 'glyphicon glyphicon-trash').text(" Delete");
    });
  }

  function bindClearsMovieCardsInModal() {
      $('.close').click(function() {
        $('.movieInfo').empty();
      });
  }


load();

  function callPosterImage() {
    return $.ajax({
      url: urlPoster + key + '&query='+movieName ,
      dataType: 'jsonp',
      success: function(data) {
        return data.images.base_url;       
       }
    });
  }

function bindApiEvent() {
    $('.movieButton').click(function(){
        new Promise(function(resolve, reject) {
          var poster = callPosterImage();
          resolve(poster);
        }).then(function(poster) {
          var baseUrl = poster.images.base_url;
          var input = $('#movieSearch').val(),
          movieName = encodeURI(input);
            $.ajax({
              url: url + mode + key + '&query='+movieName ,
              dataType: 'jsonp',
              success: function(data) {
              // attachPosterToBoard();

              var information = data.results;
               $.each(information, function (i, item) {
                  var plot = item.overview;
                  var title = item.title;
                  var language = item.original_language;
                  var poster = item.poster_path;
                  console.log(poster)
                    
                    $('<div class="movieInfo">' + '<p class="title">' + title + '</p>' + '<p class="movieInfoText">' + "Plot:  " + plot + '</p>' + '<p class="languageText">' + "Original Language:  " + language + '</p>' + '<div class="plus-icon">' + '</figcaption><i class="glyphicon glyphicon-plus"> Add to Board </i>' + '</div>' + '</div>').prependTo($card).appendTo($modal);
                    // $('<img class="moviePoster>')
                    // add image poster here
                    // new div entirely "left side"
                    // to get image need base_url, a file_size and a file_path.
                    // I have base url above and file_path below. Need file_size
                    // Want the size to either be w342 or w500. For example the url below:
                   // https://image.tmdb.org/t/p/w342/2c0dUpI8CSoQT5rsbsgNGjvVuFM.jpg
                   // add the call above to be in the same scope as the other
                }); 
            }
        });
      });
    });


   
      $('.mlbButton').click(function(){
      $.ajax({
        url: 'http://api.sportradar.us/mlb-t5/games/2016/10/09/schedule.xml',
        method: 'GET',
        crossorigin: true,
        dataType: 'xml',
          success: function(data){
          console.log(data);
        }
      });
    });



}