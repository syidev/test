$(document).ready(function() {
    
    var switcher = 0;
    var hideMenuVar = 1160;
        
    if ($(window).width() <= hideMenuVar) {
        hideMenu();
    } else {
        showMenu();
    }
    
    $(window).resize(function() {
        if($(window).width() <= hideMenuVar) {
           hideMenu();   
        } else {
            showMenu();
        }  
    });
    
    function hideMenu() {        
        $('main > .side-menu > ul > li > a > span').hide();
        $('main > .side-menu > .info > span').hide();
        $('.aside-divider').hide();
        $('main > aside').css('width', '65px');
        $('.arrow > i').text('menu');        
        $('.info > img').css('width', '24px');
        // $('main aside .info').css('margin-bottom', '0px');
        $('main aside ul li').css('width','65px')
        $('main aside').css('box-shadow','none');    
        switcher = 1;
    }
    
    function showMenu() {
        $('main > .side-menu > ul > li > a > span').show();
        $('main > .side-menu > .info > span').show();
        $('.aside-divider').show();
        $('main > aside').css('width', '270px');
        $('.arrow > i').text('keyboard_backspace');     
        $('.info > img').css('width', '50px');
        // $('main aside .info').css('margin-bottom', '30px');
        $('main aside ul li').css('width','100%');
        if ($(window).width() <= hideMenuVar) {
                $('main aside').css('box-shadow','10px 10px 10px rgba(0,0,0, .5)');    
        }
        
        switcher = 0;
    }
 
    $('.arrow').click( function() {
        if (switcher == 0) {
            hideMenu();
            $('.arrow > i').hide();
            $('.arrow > i').show('puff','fast');    
                                  
        } else {
            showMenu();
            $('.arrow > i').hide();
            $('.arrow > i').show('puff','fast');    
        }     
    });

    $('.fav').click( function() {
        
        $(this).children().toggleClass('favorite');
        $(this).toggleClass('favor');
        
        if ($(this).hasClass('favor')) {
            $(this).css('display', 'block'); 
        } else {
            $(this).css('display', 'none');
        }
    });

    $(".item").hover(
        
        function() {
            $(this).find('.fav').css("display", "block");
        }, 
        function() {
            if ($(this).find('.fav').hasClass('favor')) {
                $(this).find('.fav').css("display", "block");
            } else {
                $(this).find('.fav').css("display", "none");
            }       
        }
    );   
});





