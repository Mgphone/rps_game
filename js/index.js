//html result
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiseBtns = document.querySelectorAll(".choiceBtn");

// declare value
let player;
let computer;
let result;

choiseBtns.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player:${player}`;
    computerText.textContent = `Computer:${computer}`;
    resultText.textContent = checkingResult();
  })
);

function computerTurn() {
  const randNum = Math.floor(Math.random() * 3);
  switch (randNum) {
    case 0:
      computer = "ROCK";
      break;
    case 1:
      computer = "PAPER";
      break;
    case 2:
      computer = "SCISSOR";
      break;
    default:
      throw console.error();
  }
}
function checkingResult() {
  if (player == computer) {
    return "Draw!";
  } else if (computer == "ROCK")
    return player == "PAPER" ? "You Win!" : "You Lose!";
  else if (computer == "PAPER")
    return player == "SCISSOR" ? "You Win!" : "You Lose!";
  else if (computer == "SCISSOR")
    return player == "ROCK" ? "YOU Win!" : "You Lose!";
}
