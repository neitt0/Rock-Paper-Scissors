const playerOptions = document.querySelectorAll("button")
const scoreBoard = document.querySelector(".scoreBoard")

let result = document.createElement("p")
let player = document.createElement("p")
let computer = document.createElement("p")

playerOptions.forEach(option => {
  option.addEventListener("click", () => {
    let playerChoice = option.innerText.toLowerCase()
    let computerChoice = getComputerChoice()
    
    player.textContent = `Your choice: ${playerChoice}`;
    computer.textContent = `Computer's choice: ${computerChoice}`;

    result.textContent = playRound(playerChoice, computerChoice)
    
    scoreBoard.append(player, computer, result)
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
          return "You Won!";
          break;
        default:
          return "Failed to get computer's response";
      }
      break;
    case "paper":
      switch (computerSelection) {
        case "rock":
          return "You Won!";
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
          return "You Won!";
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

/*
function game() {
  // Score of Player
  let playerScore = 0;

  // Score of Computer
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    // Prompt for player's choice
    let playerChoice = prompt("Choose your weapon! Rock, Paper, or Scissors?");

    // Run round
    let round = playRound(playerChoice, getComputerChoice());

    // Add score to winner
    if (round === "You Won!") {
      playerScore = playerScore + 1;
    } else if (round === "You lost!") {
      computerScore = computerScore + 1;
    }

    console.log(`Round: ${i + 1}`);
    console.log(round);
    console.log(playerScore);
    console.log(computerScore);
  }
}
*/
