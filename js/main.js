$(function(){
    $('.slider__inner').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/icons/previous.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/icons/next.png" alt=""></button>',
        autoplay: 3000,
        fade: true,
        asNavFor: '.preview',   
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    arrows: false,
                    autoplay: 1000,
                }
            }
        ]                    
    }); 

    $('.preview').slick({
        arrows: false,  
        slidesToShow: 6, 
        slidesToScroll: 6,  
        asNavFor: '.slider__inner',    
        focusOnSelect: true,           
        variableWidth: true,                
    }); 

    $('.header__menu-btn').on('click',function(){
        $('.header__list').slideToggle();
    });
});


