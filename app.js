// Carousel de imagenes //
window.addEventListener('load', function () {
    new Glider(document.querySelector('.carousel_lista'), {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: '.corousel_indicador',
        arrows: {
           prev: '.prev',
           next: '.next'
        }
    });
});

// Comportamiento section hover //

let content = document.querySelectorAll('.carouselElement'),
    element = document.querySelectorAll('.showBtn');

const showContent = () => {
    element.style.display = "block";
}

const hideContent = () => {
    element.style.display = "none";
}

content.addEventListener('mouseover', showContent);
content.addEventListener('mouseout', hideContent);





