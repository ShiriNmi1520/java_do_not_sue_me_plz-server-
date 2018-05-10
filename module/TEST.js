$(function(){
    var jqxhr = $.getJSON( "http://opendata2.epa.gov.tw/UV/UV.json", function(data) {


        console.log( data );
    })
        .done(function() {
            console.log( "second success" );
        })
        .fail(function() {
            console.log( "error" );
        })
        .always(function() {
            console.log( "complete" );
        });


})