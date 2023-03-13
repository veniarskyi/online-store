const slider = document.querySelector('.slider');
const sliderContainer = slider.querySelector('.slider-container');
const sliderCards = slider.querySelectorAll('.slider-card');
const sliderCardWidth = sliderCards[0].offsetWidth;
let currentPosition = 0;

sliderContainer.style.transform = `translateX(${currentPosition}px)`;

function slideLeft() {
  if (currentPosition < 0) {
    currentPosition += sliderCardWidth;
    sliderContainer.style.transform = `translateX(${currentPosition}px)`;
  }
}

function slideRight() {
  if (currentPosition > -(sliderCardWidth * (sliderCards.length - 1))) {
    currentPosition -= sliderCardWidth;
    sliderContainer.style.transform = `translateX(${currentPosition}px)`;
  }
}

slider.querySelector('.slider-control-left').addEventListener('click', slideLeft);
slider.querySelector('.slider-control-right').addEventListener('click', slideRight);

