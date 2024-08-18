// add event listener to GET JOKE button
import getRequest from '../api/promises';

const events = () => {
  document.querySelector('#joke-btn').addEventListener('click', () => {
    const punch = document.querySelector('#joke-btn');
    const joke = document.querySelector('#joke-setup');
    const punchline = document.querySelector('#joke-punchline');
    getRequest().then(() => {
      punch.textContent = 'GET PUNCHLINE';
      // getRequest().then(console.warn);
      getRequest().then((data) => {
        joke.textContent = data.setup;
        punchline.textContent = data.delivery;
      });
    });
  });

  // document.querySelector('#joke-btn').addEventListener('click', () => {
  //   const punch = document.querySelector('#joke-btn');
  //   getRequest().then(() => {
  //     punch.textContent = 'GET NEW JOKE';
  //   });
  //   getRequest().then((data) => {
  //     punchline.textContent = data.delivery;
  //   });
  // });
};
export default events;
