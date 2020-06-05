$(function () {
    $('.wrapper').hover(function () {
        $(this).children('.front').stop().animate({ top: '300px', opacity: '0.1' }, 700)
    }, function () {
        $(this).children('.front').stop().animate({ top: '0', opacity: '1.0' }, 400)
    })
});