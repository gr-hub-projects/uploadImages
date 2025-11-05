$('.firstSlider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive: [
    {

        breakpoint: 990,
        arrows: false,
        settings: { slidesToShow: 1.4 },

        breakpoint: 768,
        arrows: false,
        settings: { slidesToShow: 1 }
    }
    ]
});
