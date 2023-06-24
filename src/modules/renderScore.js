const renderScore = async (scores) => {
  const scoreTable = document.getElementById('score-info');
  scoreTable.innerHTML = '';
  scores.forEach(({ user, score }) => {
    scoreTable.innerHTML += `
      <li>${user}: ${score}</li>
    `;
  });
};

export default renderScore;