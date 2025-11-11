let nextButton = document.getElementById('next');
let preButton = document.getElementById('pre');
let backButton = document.getElementById('back');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');

nextButton.oneclick = function(){
    showSlider('next');
}
preButton.oneclick = function(){
    showSlider(pre);
}
const showSlider = (type) => {
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next')
    }
}
