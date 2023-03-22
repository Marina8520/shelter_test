const BTN_LEFT = document.querySelector('#left-arrow');
const BTN_RIGHT = document.querySelector('#right-arrow');
const CAROUSEL = document.querySelector('.carousel');

const moveLeft = () => {
    CAROUSEL.classList.toggle('transition-left');
    BTN_LEFT.removeEventListener('click', moveLeft );
};
const moveRight = () => {
    CAROUSEL.classList.toggle('transition-right');
    BTN_RIGHT.removeEventListener('click', moveRight );
};

BTN_LEFT.addEventListener('click', moveLeft)

BTN_RIGHT.addEventListener('click', moveRight)

CAROUSEL.addEventListener('animationend', () => {
    CAROUSEL.classList.remove('transition-right');
    CAROUSEL.classList.remove('transition-left');
})