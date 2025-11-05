$('.habitaciones-slider').slick({
    infinite: true,
    slidesToShow: 1.05,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="28" viewBox="0 0 16 28" fill="none"><path d="M14.387 26.4287L1.61324 14L14.387 1.5712" stroke="#072942" stroke-width="2" stroke-linecap="round"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="28" viewBox="0 0 16 28" fill="none"><path d="M1.61304 26.4287L14.3868 14L1.61304 1.5712" stroke="#072942" stroke-width="2" stroke-linecap="round"/></svg></button>',
    responsive: [
        {
        breakpoint: 1424,
            settings: { slidesToShow: 1.5 },

            breakpoint: 990,
            arrows: false,
            settings: { slidesToShow: 1.4 },

            breakpoint: 768,
            arrows: false,
            settings: { slidesToShow: 1 }
        }
    ]
});