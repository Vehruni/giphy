// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
    var choice=$("#search-term").val();
    var myUrl= "https://api.giphy.com/v1/gifs/search?q="+ choice+"&rating=pg&api_key=dc6zaTOxFJmzC";
    console.log(myUrl);
    
    $.ajax({
        url: myUrl,
        method: "GET",
        success: function(response) {
            console.log(response.data[0].images.original.url);
            $("body").append("<img src=" + response.data[0].images.original.url + ">");
        },

    });


});


