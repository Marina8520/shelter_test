const burgerBtn = document.querySelector('.burger');
const burgerBtn2 = document.querySelector('.burger2');
const burgerNavigation = document.querySelector('.burger-navigation');
const burgerLine1 = document.querySelector('.line1');
const burgerLine2 = document.querySelector('.line2');
const burgerLine3 = document.querySelector('.line3');
const header = document.querySelector('.header');


burgerBtn.addEventListener('click', function(){
	burgerNavigation.classList.toggle('active-burger');
    header.style.visibility = 'hidden';
})

burgerNavigation.addEventListener('click', () => {
    burgerNavigation.classList.toggle('active-burger');
    header.style.visibility = 'visible';
})