$(document).ready(function () {
"use strict";

    // $('#toggle').click(function (e) {
    //     e.preventDefault();
    //     $('dd').toggleClass('invisible')
    // })
    //
    // $('li').css('background-color', '#FF0');
    // $('li').parent().css('background-color', '#0F0');


    //Effects Exercises
    // # 1
    $('span').click(function () {
       $(this).parent().hide();

    });


    // # 2
    $('ul').hide();
    $('h3').click(function () {
        $('ul').slideToggle().show();
    });


    //# 3

    $('h2').hide().delay( 8000 ).fadeIn();




});