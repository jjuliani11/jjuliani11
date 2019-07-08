// Implement the red light using jQuery. Don't forget to add the script tags.
$(document).ready(function(){
/* STOP LIGHT PSEUDOCODE REVIEW:
* On clicking the stop button, turn the green light on for 3 seconds
* Then, turn green light off, and turn yellow light on for 3 seconds
* Then, turn yellow light off, and turn red light on
* When reset button is clicked, turn all of the lights off
*/
$("#stopButton").click(illuminateRed);
$("#slowButton").click(illuminateYellow);
$("#goButton").click(illuminateGreen);

function illuminateRed(){
    clearLights();
   $("#stopLight").css("background-color","red");}

   function illuminateYellow(){
       clearLights();
   $("#slowLight").css("background-color","yellow");

}

function clearLights(){
$("#stopLight, #slowLight, #goLight").css("background-color","black");

}

function illuminateGreen(){
    clearLights();
    $("#goLight").css("background-color","green");
}


});