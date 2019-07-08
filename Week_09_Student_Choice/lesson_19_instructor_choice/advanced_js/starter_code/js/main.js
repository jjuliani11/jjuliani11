$(document).ready(function(){
    // on button click:
        // make an AJAX call to our JSON file
        // get the data from the JSON file, and store it in JS
        // iterate over the data, and append each student to the HTML table

    
    function makeJSONCall(){
        $.getJSON('js/data.json', function(data){
            // console.log(data);

            $.each(data, function(key, val){
                let rosterEntry = `
                    <tr>
                        <td>${val.firstName}</td>
                        <td>${val.lastName}</td>
                        <td>${val.email}</td>
                        <td><input type="checkbox" ${val.attendance ? "checked" : ""} /></td>
                    </tr>
                    `;

                $('tbody').append(rosterEntry);
            })
        });
    }
    
        $('button').click(makeJSONCall);
});