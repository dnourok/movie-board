// var fs = require('fs');
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
var $imagePoster = $('.imagePoster')


  function load() {
    bindDeleteButtonEvent(); 
    bindAddMovieToBoard();
    bindClearsMovieCardsInModal();
    bindApiEvent();
  }

  function bindDeleteButtonEvent() {
        $('.rowMovie').on('click', '.glyphicon-trash', function(e) {
        e.preventDefault();
        var deleteCard = $(this).closest($("[class^=col-md-4]"));
        $(deleteCard).remove();
      });
  }

  function bindAddMovieToBoard() {
    $('.populateModal').on('click','.plus-icon', function(e) {
      e.preventDefault();
      var cardToAttach = $(this).closest($("[class^=movieInfo]"));
      $(cardToAttach).appendTo('.rowMovie').attr("class", "col-md-4 updatedMovieInfo");
      $('a.close')[0].click();
      $('.glyphicon-plus').attr('class', 'glyphicon glyphicon-trash').text(" Delete");
    });
  }


function bindMlBcardToBoard(){
   $('.populateModalMLB').click('.plus-icon-MLB', function(e){
     console.log("clicked")
     var mlbCard = $(this).closest($("[class^=card]"));
     $('.card').appendTo('.test');
   });
};



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

 function callMLBSchedule() {
      $.ajax({

        method: 'GET',
        crossorigin: true,
        dataType: 'xml',
          success: function(xml){
            console.log(xml);
        }
      });
  };

   $('.mlbButton').click(function(){
            callMLBSchedule()
            $('.mlbDisplayCard').show();
        });

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
                  var information = data.results;
                   $.each(information, function (i, item) {
                      var plot = item.overview;
                      var title = item.title;
                      var language = item.original_language;
                      var posterImage = item.poster_path;
                      var moviePosterPath = baseUrl + "w185" + posterImage;
                      console.log(moviePosterPath)
                        $('<div class="movieInfo">' + '<p class="title">' + title + '</p>' + '<p class="movieInfoText">' + "Plot:  " + plot + '</p>' + '<p class="languageText">' + "Original Language:  " + language + '</p>' + '<div class="plus-icon">' + '</figcaption><i class="glyphicon glyphicon-plus"> Add to Board </i>' + '</div>' + '<img class="moviePosterLocation" src="'+ moviePosterPath +'" />'+ '</div>').prependTo($card).appendTo($modal);
                   }); 
                  }
                });
              });
            });
  }

  // put div around image