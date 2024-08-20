// add event listener to GET JOKE button
import getRequest from '../api/promises';

const events = () => {
  const punch = document.querySelector('#joke-btn');
  punch.addEventListener('click', () => {
    const joke = document.querySelector('#joke-setup');
    const punchline = document.querySelector('#joke-punchline');
    getRequest().then((data) => {
      if (punch.textContent === 'GET A JOKE') {
        joke.textContent = data.setup;
        punch.textContent = 'GET PUNCHLINE';
      } else
      if (punch.textContent === 'GET PUNCHLINE') {
        punchline.textContent = data.delivery;
        punch.textContent = 'GET NEW JOKE';
      } else {
        events();
      }
    });
  });
};
export default events;
