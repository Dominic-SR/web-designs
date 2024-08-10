// carousel.js file
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    /* here you can set the settings for responsive items */
    responsive:{
        0:{
            items:2
        },
        768:{
            items:4
        }
    }
})