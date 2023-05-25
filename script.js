const playerOptions = document.querySelectorAll("button")
const scoreBoard = document.querySelector(".scoreBoard")

const result = document.createElement("p")
const player = document.createElement("p")
const computer = document.createElement("p")

let playerScoreCount = 0;
let computerScoreCount = 0;

const gameDecided = document.querySelector(".gameDecided")

const playerScoreDisplay = document.createElement("p")
const computerScoreDisplay = document.createElement("p")
const finalResult = document.createElement("p")

playerOptions.forEach(option => {
  option.addEventListener("click", () => {
    let playerChoice = option.innerText.toLowerCase()
    let computerChoice = getComputerChoice()
    
    player.textContent = `Your choice: ${playerChoice}`;
    computer.textContent = `Computer's choice: ${computerChoice}`;

    result.textContent = playRound(playerChoice, computerChoice)
    
    scoreBoard.append(player, computer, result)

    if (result.innerText == "You won!") {
      playerScoreCount++;
    } else if (result.innerText == "You lost!") {
      computerScoreCount++;
    }

    if (playerScoreCount
     == 5) {
      finalResult.textContent = "You won!"
    } else if (computerScoreCount == 5) {
      finalResult.textContent = "The Computer won! :("
    }
    playerScoreDisplay.innerText = `Your Score: ${playerScoreCount}`
    computerScoreDisplay.innerText = `COM's Score: ${computerScoreCount}`

    gameDecided.append(playerScoreDisplay, computerScoreDisplay, finalResult)
  });
})












// get random number between specified parameter
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getComputerChoice() {
  // List for all the choices
  let list = ["rock", "paper", "scissors"];
  // get random number from 0 to list.length - 1
  let choice = getRandomNumber(0, list.length);
  // return list[random number]
  return list[choice];
}

function playRound(playerSelection, computerSelection) {

  // check player's choice
  switch (playerSelection) {
    case "rock":
      // check computer's choice
      switch (computerSelection) {
        // compares
        case "rock":
          return "You tied!";
          break;
        case "paper":
          return "You lost!";
          break;
        case "scissors":
          return "You won!";
          break;
        default:
          return "Failed to get computer's response";
      }
      break;
    case "paper":
      switch (computerSelection) {
        case "rock":
          return "You won!";
          break;
        case "paper":
          return "You tied!";
          break;
        case "scissors":
          return "You lost!";
          break;
        default:
          return "Failed to get computer's response";
      }
      break;
    case "scissors":
      switch (computerSelection) {
        case "rock":
          return "You lost!";
          break;
        case "paper":
          return "You won!";
          break;
        case "scissors":
          return "You tied!";
          break;
        default:
          return "Failed to get computer's response";
      }
      break;
    default:
      return "Failed to get your response";
  }
}
