$(function(){
    $('.slider__inner').slick({
        arrows: false, 
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


