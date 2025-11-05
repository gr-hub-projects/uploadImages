$('.club-slider').slick({
    infinite: true,
    slidesToShow: 2.35,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="29" viewBox="0 0 18 29" fill="none"><path d="M15.6417 26.8574L2.86794 14.4287L15.6417 1.99991" stroke="white"stroke-width="4" stroke-linecap="round"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="29" viewBox="0 0 18 29" fill="none"><path d="M2 26.8574L14.7737 14.4287L2 1.99991" stroke="white" stroke-width="4" stroke-linecap="round"/></svg></button>',
    responsive: [
    {
        breakpoint: 1124,
        arrows: false,
        settings: { slidesToShow: 2 },

        breakpoint: 768,
        arrows: false,
        settings: { slidesToShow: 1 }
    }
    ]
});