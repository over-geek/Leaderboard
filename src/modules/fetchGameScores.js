import { url } from './url.js';
import renderScore from './renderScore.js';

const fetchGameScores = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const { result } = data;
  renderScore(result);
};

export default fetchGameScores;