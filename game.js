function startNewGame() {
  gameArea.style.display = "block";
  activePlayerDisplay.textContent = players[turn].playerName;
}
function selectGameBox(event) {
  const row = event.target.dataset.row;
  const col = event.target.dataset.col;
  if (gameData[row - 1][col - 1] > 0) {
    alert("invlaisd");
    return;
  }
  event.target.classList.add("disabled");
  event.target.textContent = players[turn].Symbol;
  gameData[row - 1][col - 1] = turn + 1;
  console.log(gameData);
  switchPlayer();
}
function switchPlayer() {
  if (turn === 0) {
    turn = 1;
  } else {
    turn = 0;
  }
  activePlayerDisplay.textContent = players[turn].playerName;
}
function winCheck() {
  for (let i = 0; i <= 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][0] === gameData[i][1]
    ) {
      return gameData[i][1];
    }
  }
  for (let i = 0; i <= 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[1][i]
    ) {
      return gameData[1][i];
    }
  }
}
