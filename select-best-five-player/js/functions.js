function addPlayerName(event) {
  const player = event.path[2].childNodes[3].childNodes[1].innerText;
  const list = document.getElementById("selected-player-list");
  list.innerHTML += `<li>${player}</li>`;
  event.target.disabled = true;
}
