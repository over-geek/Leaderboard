import './style.css';
import { url } from './modules/url.js';
import fetchGameScores from './modules/fetchGameScores.js';

const refresh = document.getElementById('refresh-btn');
const form = document.getElementById('form');

refresh.addEventListener('click', fetchGameScores);
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const inputScore = document.getElementById('score').value;
  const scores = {
    user: name,
    score: inputScore,
  };
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(scores),
  });
  form.reset();
});

fetchGameScores();