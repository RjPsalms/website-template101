const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
  })

const myCarousel = document.getElementById('myCarousel')
  myCarousel.addEventListener('slide.bs.carousel', event => {
    // do something...
  })

  
// document.addEventListener('DOMContentLoaded', function() {
//   const storyDiv = document.querySelector('#story');
//   const mainSection = document.querySelector('main');
//   const getTemplateButton = document.querySelector('#getTemplate');

//   // Initial state (visible)
//   let storyVisible = false;

//   getTemplateButton.onclick = function() {
//       // Toggle visibility
//       storyVisible = !storyVisible;
//       storyDiv.style.display = storyVisible ? 'block' : 'none';

//       // Hide the main section when story is visible
//       mainSection.style.display = storyVisible ? 'none' : 'block';
//   };
// });