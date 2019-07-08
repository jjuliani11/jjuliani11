$(document).ready(start);
function readMore() {
    $('.readmore').hide();
    $('#show-this-on-click').slideDown();
    $('.readless').show();
  }
  
  function readLess() {
    $('.readless').hide();
    $('#show-this-on-click').slideUp();
    $('.readmore').show();
  }
  
  function sidebarLearnMore() {
    $('.learnmore').hide();
    $('#learnmoretext').slideDown();
  }
  function start() {
    $('a').click(function(event){
      event.preventDefault();
    });


  $('.readmore').click(readMore);
  $('.readless').click(readLess);
  $('.learnmore').click(sidebarLearnMore);
}