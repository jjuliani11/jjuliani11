//So a click on the teams name will cause the player content to slide down and show
//The user should be able to the intertact with this dropped down content with out a page load 
//Then once the user clicks on the teams name again the content should slide up and hide teh content 
// Then do the same three steps with any other team name 

$(document).ready(function() {
  function togglePlayer(){
    $(this).parent().siblings(".player").slideToggle();
    event.preventDefault();
  }

 $(".open a").click(togglePlayer);
});