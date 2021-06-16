// Mobile Menu 
const mobileBtn = document.getElementById('mobile-cta')
    nav = document.querySelector('nav');
    mobileBtnExit = document.getElementById('mobile-exit');
    homeExit = document.getElementById('home-btn');
    workExit = document.getElementById('work-btn');
    aboutExit = document.getElementById('about-btn');
    contactExit = document.getElementById('contact-btn');


mobileBtn.addEventListener('click', () => {
    nav.classList.add('menu-btn');
})

mobileBtnExit.addEventListener('click', () => {
    nav.classList.remove('menu-btn');
})

homeExit.addEventListener('click', () => {
    nav.classList.remove('menu-btn');
})

workExit.addEventListener('click', () => {
    nav.classList.remove('menu-btn');
})

aboutExit.addEventListener('click', () => {
    nav.classList.remove('menu-btn');
})

contactExit.addEventListener('click', () => {
    nav.classList.remove('menu-btn');
})
