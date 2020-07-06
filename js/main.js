$(function(){
    $('.slider__inner').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/icons/previous.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/icons/next.png" alt=""></button>',
        autoplay: 3000,
        fade: true,
        asNavFor: '.preview',                       
    }); 

    $('.preview').slick({
        arrows: false,  
        slidesToShow: 6, 
        slidesToScroll: 6,  
        asNavFor: '.slider__inner',    
        focusOnSelect: true,           
        variableWidth: true,   
        
    }); 
});


