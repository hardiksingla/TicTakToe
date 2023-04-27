
function openPlayerConfig(event){
  editedPlayer = +event.target.dataset.playerid
  console.log(editedPlayer)
  playerConfigOverlay.style.display="block";
  backdrop.style.display="block"
}
function closeConfig(){
  playerConfigOverlay.style.display="none";
  backdrop.style.display="none"
  errorMessage.textContent ="";
}
function savePlayerName(event){
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlyerData = formData.get("playername").trim();
  if(!enteredPlyerData){
    errorMessage.textContent ="enter valid name";
    return;
  }
  if (editedPlayer === 1){
    players[0].playerName = enteredPlyerData
    console.log(players[0].playerName)
    playerOneName.textContent = enteredPlyerData
    closeConfig()
  }
  else if (editedPlayer === 2){
    players[1].playerName = enteredPlyerData
    console.log(players[1].playerName)
    playerTwoName.textContent = enteredPlyerData
    closeConfig()
  }
}