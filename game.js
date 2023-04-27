function startNewGame() {
  gameArea.style.display = "block";
  activePlayerDisplay.textContent = players[turn].playerName;
  gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  for (const i of gameBoxes) {
    i.classList.remove("disabled");
    i.textContent = "";
  }
  endGame.style.display = "none";
  round = 0
  turn=0  
}
function selectGameBox(event) {
  const row = event.target.dataset.row;
  const col = event.target.dataset.col;
  if (gameData[row - 1][col - 1] > 0) {
    return;
  }
  event.target.classList.add("disabled");
  event.target.textContent = players[turn].Symbol;
  round++;
  gameData[row - 1][col - 1] = turn + 1;
  gameData[row - 1][col - 1] = turn + 1;
  9;

  switchPlayer();
  let winner = winCheck();
  if (winner !== 0) {
    if (winner === -1) {
      endGameText.textContent = "It's A Draw";
    } else {
      winnerName.textContent = players[winner - 1].playerName;
    }
    endGame.style.display = "block";
    activePlayerDisplay.parentElement.style.display="none"
  }
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
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][0] === gameData[i][2]
    ) {
      return gameData[i][1];
    }
  }
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      return gameData[1][i];
    }
  }
  if (
    gameData[1][1] > 0 &&
    gameData[1][1] === gameData[0][0] &&
    gameData[0][0] === gameData[2][2]
  ) {
    return gameData[1][1];
  }
  if (
    gameData[1][1] > 0 &&
    gameData[1][1] === gameData[0][2] &&
    gameData[1][1] === gameData[2][0]
  ) {
    return gameData[1][1];
  }
  if (round === 9) {
    return -1;
  }
  return 0;
}
