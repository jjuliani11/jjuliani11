
var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

function addCity() {
  $("select").append("<option>" + this + "</option>");
}

function changeBackground() {
  var selectedCity = $("select").val();

  if (selectedCity == cities[0]) {
    $("body").attr("class", "nyc");
  }
  else if (selectedCity == cities[1]) {
    $("body").attr("class", "sf");
  }
  else if (selectedCity == cities[2]) {
    $("body").attr("class", "la");
  }
  else if (selectedCity == cities[3]) {
    $("body").attr("class", "austin");
  }
  else if (selectedCity == cities[4]) {
    $("body").attr("class", "sydney");
  }

}

function start() {
  $(cities).each(addCity);
  $("select").change(changeBackground);{
    event.preventDefault();
  } 
}
$(document).ready(start);

// Add each city in a loop with a var 
// - a command to pull the data from the input 
// - an if/else statement that changes the background depending on the city
// - line in function start to run all the functions
// use the prevent deafault function to prevent the page from reloading every time a click happens 
// make sure the there is no delay in the code from excuting its purpose untill all DOM have loaded 