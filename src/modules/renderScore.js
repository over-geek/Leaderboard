const renderScore = async (scores) => {
  const scoreTable = document.getElementById('score-info');
  scoreTable.innerHTML = '';
  scores.forEach(({ user, score }) => {
    scoreTable.innerHTML += `
      <tr>
        <td>${user}: ${score}</td>
      </tr>
    `;
  });
};

export default renderScore;