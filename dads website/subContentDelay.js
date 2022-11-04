$('.nav-subcontent-parent').hover(function(){
    $.each($('.subContentHover'), function(i, el){

        $(el).css({'opacity':0});

        setTimeout(function(){
            $(el).animate({
                'opacity': '1'
            }, 50);
        },100 + ( i * 25));
    })
    $.each($('.subContentHover'), function(i, el) {

        setTimeout(function(){
            $(el).animate({
                'opacity': '1'
            }, 50);
        },100 + ( i * 25));

})});