// add event listener to GET JOKE button
import getRequest from '../api/promises';

const events = () => {
  const punch = document.querySelector('#joke-btn');
  const joke = document.querySelector('#joke-setup');
  const punchline = document.querySelector('#joke-punchline');
  punch.addEventListener('click', () => {
    getRequest().then((data) => {
      if (punch.textContent === 'GET A JOKE') {
        joke.textContent = data.setup;
        punch.textContent = 'GET PUNCH LINE';
        punch.setAttribute('id', 'punchline-btn');
        punch.addEventListener('click', () => {
          punch.textContent = 'GET NEW JOKE';
          punchline.textContent = data.delivery;
          punch.setAttribute('id', 'new-joke-btn');
          punch.addEventListener('click', () => {
            punch.textContent = 'GET A JOKE';
            punchline.textContent = '';
          });
        });
      }
    });
  });
};

export default events;
