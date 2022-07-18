$(function(){
    setInterval(fn, 3000);
    function fn(){
        $('#visual ul li:first-child').fadeOut().next().fadeIn().end().appendTo('#visual ul');
    }
});