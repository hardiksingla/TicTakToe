const playerConfigOverlay = document.getElementById("config-overlay")
const backdrop = document.getElementById("backdrop")
const playerNameForm = document.getElementById("playerNameForm")
const errorMessage = document.getElementById("error");

let players = [
  {
    playerName: 'Player One',
    Symbol: 'X'
  },
  {
    playerName:'Player Two',
    Symbol: 'O'
  }

]

const editPlayerOneName = document.getElementById("player1Name")
const editPlayerTwoName = document.getElementById("player2Name")
const cancelConfigButton = document.getElementById("cancelConfigButton")
const startGameButton = document.getElementById("start-new-game")
const gameArea = document.getElementById("active-game")

editPlayerOneName.addEventListener('click',openPlayerConfig)
editPlayerTwoName.addEventListener('click',openPlayerConfig)

cancelConfigButton.addEventListener("click",closeConfig)
backdrop.addEventListener("click",closeConfig)

playerNameForm.addEventListener("submit",savePlayerName)

startGameButton.addEventListener("click",startNewGame)