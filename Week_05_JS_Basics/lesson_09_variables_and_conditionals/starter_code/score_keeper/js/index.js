$(document).ready(function(){

    // Starting at 0,
    // Whenever I click the +5 button, add 5 to the result
        // Output result to the screen
    // Whenever I click the +10 button, add 10 to the result
        // Output result to the screen
    // Whenever I click the -1 button, subtract 1 from the result
        // Output result to the screen
    // Whenever I click the 0 button, reset result to 0
        // Output result to the screen

    var total = 0;

    function add5(){
        total = total + 5;
        // console.log(total);
        $('#result').text(total);
    }
    
    function add10(){
        total = total + 10;
        // console.log(total);
        $('#result').text(total);
    }

    function sub1(){
        total = total - 1;
        // console.log(total);
        $('#result').text(total);
    }

    function zero(){
        total = 0;
        // console.log(total);
        $('#result').text(total);
    }

    $('#add5').click(add5);
    $('#add10').click(add10);
    $('#sub1').click(sub1);
    $('#zero').click(zero);
    
});