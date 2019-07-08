$(document).ready(function(){

    // When compare is clicked, do the following:
        // Initialize comparison var
        // get input value from field A, and store in a var
        // get input value from field B, and store in a var

        // if value A is greater than value B,
            // then set comparison var to '>'
        // if value A is less than value B,
            // then set comparison var to '<'
        // if value A is equal to value B,
            // then set comparison var to '==='
        // Else,
            // then set comparison var to 'N/A'

        // Output comparison to the screen

    $('#submit').click(function(){
        var comparison;
        var valueA = parseInt($('#a').val());
        var valueB = parseInt($('#b').val());
        console.log(valueA, valueB);

        if(valueA > valueB){
            comparison = '>';
        }else if(valueA < valueB){
            comparison = '<';
        }else if(valueA === valueB){
            comparison = '===';
        }else{
            comparison = 'N/A';
        }

        $('#comparison').text(comparison);
    })

});