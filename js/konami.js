$(document).ready(function () {
"use strict";


    var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";

    $(document).keyup(function(e) {

        kkeys.push( e.keyCode );

        if ( kkeys.toString().indexOf( konami ) >= 0 ) {

            alert('You have added 30 lives!')
            alert('Here comes your lives')
            $('body').html('https://www.youtube.com/watch?v=dQw4w9WgXcQ');

        }

    });


});