$(function() {
    $('.dropdown').hover(function(){
        $(this).children('.sub-menu').stop(true,false).slideDown(400);
    }, function(){
        $(this).children('.sub-menu').stop(true,false).slideUp(400);
    });

    $('.dropdown ul li').hover(function(){
        $(this).animate({backgroundColor:"#ff3300",}, 400 );
    }, function(){
        $(this).animate({backgroundColor:"#E14B4B",}, 400 );
    });
});
