const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');
let selectedRating = 'Satisfied';

// Don't like how this is coded
// If user clicks the small text inside the rating div, it'll give out an error
// because it's looking for the next sibling in that div, which isn't there
// I'll try to fix that when I'm re-doing these projects without the tutorial

ratingsContainer.addEventListener('click', (e) => {
    if (e.target.parentNode.classList.contains('rating')) {
      removeActive();
      e.target.parentNode.classList.add('active');
      selectedRating = e.target.nextElementSibling.innerHTML;            
    }    
});

sendBtn.addEventListener('click', (e) => {
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank you!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
  `
})

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('active');    
  }
}