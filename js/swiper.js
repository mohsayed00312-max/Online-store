var mainSwiper = new Swiper('.slide-swp', {
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
            clickable: true,
        },
        autoplay:{
            delay:1500,
            pauseOnMouseEnter: true,
            disableOnInteraction:false,
        },
        loop:true,
        speed: 800,
});
document.addEventListener('DOMContentLoaded',function(){
    var swiper = new Swiper('.products-slides', {
        slidesPerView:5,
        spaceBetween: 20,
        navigation:{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        autoplay:{
            delay:1000,
            pauseOnMouseEnter: true,
            disableOnInteraction:false,
        },
        loop:true,
        speed: 800,
        loopedSlides: 7,
        observer: true,
        observeParents: true,

        breakpoints:{
            1200:{
                slidesPerView:5,
                spaceBetween: 20,
            },
            1000:{
                slidesPerView:4,
                spaceBetween: 20,
            },
            700:{
                slidesPerView:3,
                spaceBetween: 15,
            },
            450:{
                slidesPerView:2,
                spaceBetween: 10,
            },
            0:{
                slidesPerView:1,
                spaceBetween: 10,
            }
        }
});
})




