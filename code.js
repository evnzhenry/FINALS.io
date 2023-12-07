const sliderImages = document.querySelectorAll('.slider img');
let currentImageIndex = 0;
const slideDuration = 5000; 

function changeSlide() {
  sliderImages[currentImageIndex].classList.remove('active');
  currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
  sliderImages[currentImageIndex].classList.add('active');
}

sliderImages[0].classList.add('active');
setInterval(changeSlide, slideDuration);
function updateSliderImageSize() {
const sliderWidth = document.querySelector('.slider').offsetWidth;
const sliderImages = document.querySelectorAll('.slider img');
sliderImages.forEach(img => img.style.width = `${sliderWidth}px`);
}

updateSliderImageSize();
window.addEventListener('resize', updateSliderImageSize);