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

// Comportamiento section hover // Se agrega solamente al primer elemento, se intenta utilizar querySelectorAll, 
//  pero tiene un bug en que "content.addEventListener no es una funcion"

let content = document.getElementById('carouselElement'),
    element = document.getElementById('showBtn');

const showContent = () => {
    element.style.display = "block";
}

const hideContent = () => {
    element.style.display = "none";
}

content.addEventListener('mouseover', showContent);
content.addEventListener('mouseout', hideContent);





