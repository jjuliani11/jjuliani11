$(document).ready(function(){
    
    // Initialize total variable to be 0
    // When you hit enter/submit the form,
        // Prevent default form submission action
        // Get value from input field, parse as number, and store in variable
        // Format the number as dollars to 2 decimal places**
        // Append the current value to the receipt
        // Update and format the total value, and output that to the screen
        // Clear out the input field

    let total = 0;

    function evaluateReceipt(){
        event.preventDefault();
        // console.log("Submitted form!");

        let newEntry = parseFloat($('#newEntry').val());
        // console.log(newEntry);

        let currency = currencyFormatter(newEntry);

        $('#entries').append(`<tr><td colspan="2">${currency}</td></tr>`);

        total = total + newEntry;
        let formattedTotal = currencyFormatter(total);
        $('#total').text(formattedTotal);

        $('#newEntry').val('');
    }

    function currencyFormatter(num){
        let myCurrency = parseFloat(num);
        myCurrency = myCurrency.toFixed(2);
        myCurrency = '$' + myCurrency;
        // console.log(myCurrency);
        return myCurrency;
    }


    $('#entry').submit(evaluateReceipt);

});