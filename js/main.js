var timer2 = "30:00";
var interval = setInterval(function() {


  var timer = timer2.split(':');
  //by parsing integer, I avoid all extra string processing
  var minutes = parseInt(timer[0], 10);
  var seconds = parseInt(timer[1], 10);
  --seconds;
  minutes = (seconds < 0) ? --minutes : minutes;
  if (minutes < 0) clearInterval(interval);
  seconds = (seconds < 0) ? 59 : seconds;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  //minutes = (minutes < 10) ?  minutes : minutes;
  $('.countdown').html(minutes + ':' + seconds);
  timer2 = minutes + ':' + seconds;
}, 1000);




$(function() {
    $('a').each(function() {
      $(this).on('click', function(e) {
        e.preventDefault()
        var scrollTo = $(this).attr('href')
        var whitespace = scrollTo == '#form' ? 120 : 80
        $('html,body').animate({
          scrollTop: $(scrollTo).offset().top - whitespace
        }, 1000)
      })
    })
  })