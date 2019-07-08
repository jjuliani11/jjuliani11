function tempConverter(){
    event.preventDefault();
    let celsiusTemp = $('#celsius').val();
    let fahrenheitTemp = celsiusTemp * 1.8 +32;
    $("#fahrenheit").text(fahrenheitTemp)

  
    if(fahrenheitTemp <= 32){
        $("body").attr("style","background-color: blue");
        }else if (fahrenheitTemp > 32 && fahrenheitTemp < 65){
         $("body").attr("style", "background-color: yellow");   
        }else if (fahrenheitTemp >= 65 && fahrenheitTemp < 100){
            $("body").attr("style", "background-color: orange");
        }else if(fahrenheitTemp >= 100){
            $("body").attr("style", "background-color: red");
        }
        







    }       

    $("form").submit(tempConverter);


