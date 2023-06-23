const scoreArray = [
  { name: 100 },
  { name: 50 },
  { name: 78 },
  { name: 125 },
  { name: 77 },
  { name: 42 },
];

const renderScore = () => {
  const scoreTable = document.getElementById('score-info');
  scoreArray.forEach(({ name }) => {
    scoreTable.innerHTML += `
      <tr>
        <td>Name: ${name}</td>
      </tr>
    `;
  });
};

export default renderScore;