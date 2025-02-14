let result = "";

function pickComputerMove() {
  let computerMove;
  const randomNumber = Math.random();

  if (randomNumber <= 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber <= 2 / 3) {
    computerMove = "paper";
  } else {
    computerMove = "scissors";
  }
  return computerMove;
}

function playGame(playerMove) {
  let computerMove = pickComputerMove();

  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie";
    } else if (computerMove === "paper") {
      result = "you lose";
    } else if (computerMove === "scissors") {
      result = "you win";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "paper") {
      result = "Tie";
    } else if (computerMove === "scissors") {
      result = "you lose";
    } else if (computerMove === "rock") {
      result = "you win";
    }
  } else if (playerMove === "scissors") {
    if (computerMove === "scissors") {
      result = "Tie";
    } else if (computerMove === "paper") {
      result = "you win";
    } else if (computerMove === "rock") {
      result = "you lose";
    }
  }

  if (result === "you win") {
    score.wins += 1;
  } else if (result === "you lose") {
    score.losses += 1;
  } else if (result === "Tie") {
    score.ties += 1;
  }
  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();

  document.querySelector(".js-result").innerText = result;
  document.querySelector(
    ".js-moves"
  ).innerHTML = `you <img class="move-icon" src="images/${playerMove}-emoji.jpg" alt=""> computer <img class="move-icon" src="images/${computerMove}-emoji.jpg" alt="">`;
}

let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
/*   if (!score) {
        score = {
          wins: 0,
          losses: 0,
          ties: 0,
        }};*/
function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins:${score.wins},Losses:${score.losses},Ties${score.ties}`;
}
let isAutoPlaying = false;
let intervelId;

//const autoPlay=()=>{}
function autoPlay() {
  if (!isAutoPlaying) {
    intervelId = setInterval(() => {
      let computerMove = pickComputerMove();
      playGame(computerMove);
    }, 500);
    isAutoPlaying = true;
    document.querySelector(".auto-play-button").innerText = "Pause Auto Play";
  } else {
    clearInterval(intervelId);
    isAutoPlaying = false;
    document.querySelector(".auto-play-button").innerText = "Start Auto Play";
  }
}
