
//function switchGray() {
  //$('body').attr('class', 'gray');
//}

//function switchWhite() {
  //$('body').attr('class', 'white');
//}

//function switchBlue() {
  //$('body').attr('class', 'blue');
//}

//function switchYellow() {
  //$('body').attr('class', 'yellow');
//}

//$('#grayButton').click(switchGray);
//$('#whiteButton').click(switchWhite);
//$('#blueButton').click(switchBlue);
//$('#yellowButton').click(switchYellow);



$("li").click(function(){
  let theme = $(this).attr("id");
  let color = theme.substring(0,theme.length-6);
  $("body").attr("class", color);
  });


//click on any li button 
//str.substring treating the charcter as array 
