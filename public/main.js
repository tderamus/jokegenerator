// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
// import getRequest from '../api/promises';
import events from '../components/jokeButton';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <div class="card">
    <div class="card-body">
    <h5 class="card-title">JOKE GENERATOR</h5>
    <p id="joke-setup" class="card-text"></p>
    <p id="joke-punchline" class="card-text"></p>
    <a href="#" id="joke-btn" class="btn btn-primary">GET JOKE</a>
  </div>
</div>
  `;
  console.warn('YOU ARE UP AND RUNNING!');

  events();

  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
};

init();
