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


// Carousel 
const delay = 3000; //ms

const slides = document.querySelector(".slides");
const slidesCount = slides.childElementCount;
const maxLeft = (slidesCount - 1) * 100 * -1;

let current = 0;

function changeSlide(next = true) {
  if (next) {
    current += current > maxLeft ? -100 : current * -1;
  } else {
    current = current < 0 ? current + 100 : maxLeft;
  }

  slides.style.left = current + "%";
}

// let autoChange = setInterval(changeSlide, delay);
// const restart = function() {
//   clearInterval(autoChange);
//   autoChange = setInterval(changeSlide, delay);
// };

// Controls
document.querySelector(".next-slide").addEventListener("click", function() {
  changeSlide();
  restart();
});

document.querySelector(".prev-slide").addEventListener("click", function() {
  changeSlide(false);
  restart();
});
