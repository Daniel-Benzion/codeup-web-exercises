//"use strict";
//
// $(document).ready(function() {
//     alert("The DOM has finished loading.");
// })
/*
$(document).ready(function () {
    var myHeading = $('h1').html();

    alert(myHeading);

    $('.codeup').css('border', '2px solid red');

    $('li').css('font-size', '20px');

    $('h1,p,li').css('background-color', 'grey');

});*/

let h1Color = false;
$('h1').click(function(e) {
    if (!h1Color){
        $(this).css('background', '#ff6f00');
        h1Color = true;
    } else {
        $(this).css('background', '#ffffff');
        h1Color = false;
    }
})

$('p').dblclick(function(e) {
    $(this).css('font-size', '18px');
    $(this).text('jQuery Exercises, but slightly larger than before');
})

$('li').hover(function() {
    $(this).css('color', '#FF0000');
}, function() {
    $(this).css('color', '#000000')
})