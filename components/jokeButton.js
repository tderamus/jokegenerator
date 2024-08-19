// add event listener to GET JOKE button
import getRequest from '../api/promises';

const events = () => {
  const punch = document.querySelector('#joke-btn');
  punch.addEventListener('click', () => {
    const joke = document.querySelector('#joke-setup');
    const punchline = document.querySelector('#joke-punchline');
    getRequest().then(() => {
      punch.textContent = 'GET PUNCHLINE';
      getRequest().then((data) => {
        joke.textContent = data.setup;
      }, punch.addEventListener('click', () => {
        getRequest().then((data) => {
          punch.textContent = 'GET NEW JOKE';
          punchline.textContent = data.delivery;
        });
      }));
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
