const playerConfigOverlay = document.getElementById("config-overlay")
const backdrop = document.getElementById("backdrop")
const playerNameForm = document.getElementById("playerNameForm")
const errorMessage = document.getElementById("error");
const activePlayerDisplay = document.getElementById("active-player-name")
const winnerName = document.getElementById("winner")
const endGame = document.getElementById("game-over")
const endGameText =document.getElementById("endGameText")
let turn = 0
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
let gameData=[
  [0,0,0],
  [0,0,0],
  [0,0,0],
]
let round = 0

const editPlayerOneName = document.getElementById("player1Name")
const editPlayerTwoName = document.getElementById("player2Name")
const cancelConfigButton = document.getElementById("cancelConfigButton")
const startGameButton = document.getElementById("start-new-game")
const gameArea = document.getElementById("active-game")
const gameBoxes = document.querySelectorAll("#game-board li")

editPlayerOneName.addEventListener('click',openPlayerConfig)
editPlayerTwoName.addEventListener('click',openPlayerConfig)

cancelConfigButton.addEventListener("click",closeConfig)
backdrop.addEventListener("click",closeConfig)

playerNameForm.addEventListener("submit",savePlayerName)

startGameButton.addEventListener("click",startNewGame)

for(const box of gameBoxes){
  box.addEventListener("click",selectGameBox)
}