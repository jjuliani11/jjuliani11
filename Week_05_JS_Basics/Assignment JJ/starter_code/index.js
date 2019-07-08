// - Here are the steps in creating a function to switch the background including:
// - create a variable to store data for which the certian city can me typed in
// - a command to pull the data from the input 
// - an if/else statement that changes the background depending on the city
// - include in the if/else statement the OR operater to differenciate different ways of spelling the city 
// - line in function start to run all the functions
// use the prevent deafault function to prevent the page from reloading every time a click happens 
// make sure the there is no delay in the code from excuting its purpose untill all DOM have loaded 


function changeBackground(){
    var city = $("#city-type").val().trim();
    
    if (city == "New York" || city == "NYC" || city =="New York City") {
      $("body").attr("class", "nyc");
    }
    else if (city == "San Francisco" || city == "SF" || city == "Bay Area") {
      $("body").attr("class", "sf");
    }
    else if (city == "Los Angeles" || city == "LA" || city == "LAX") {
      $("body").attr("class", "la");
    }
    else if (city == "Austin" || city == "ATX") {
      $("body").attr("class", "austin");
    }
    else if (city == "Sydney" || city == "SYD") {
      $("body").attr("class", "sydney");
    }  
  }
 
  function start() {
    $("#submit-btn").click(changeBackground);
    $("#submit-btn").click(function(event){
      event.preventDefault();
    });
  
  }
  $(document).ready(start);
  