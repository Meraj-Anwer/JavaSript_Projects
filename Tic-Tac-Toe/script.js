const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#reset-btn");
const popupBox = document.querySelector("#popupBox");
const newGameBtn = document.querySelector("#new-btn");
const msg = document.querySelector("#msg");
let playerXWins = localStorage.getItem("playerXWins") || 0;
let playerOWins = localStorage.getItem("playerOWins") || 0;
let ties = localStorage.getItem("ties") || 0;

let turnX = true;

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnX = true;
  enableBoxes();
  popupBox.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX) {
      box.innerText = "X";
      box.classList.add("x-player");
      turnX = false;
      playerXWins++;
    } else {
      box.innerText = "O";
      box.classList.add("o-player");
      turnX = true;
      playerOWins++;
    }

    updateLocalStorage();
    box.disabled = true;

    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congraculations, Winner is Player ${winner}`;
  popupBox.classList.remove("hide");
  disableBoxes();
};

const showTie = () => {
  msg.innerText = "It's a Tie!";
  popupBox.classList.remove("hide");
  ties++;
  updateLocalStorage();
};

const checkWinner = () => {
  let winnerFound = false;
  for (let pattern of winPattern) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        winnerFound = true;
        break;
      }
    }
  }

  // If no winner was found and all boxes are filled, declare a tie
  if (!winnerFound && [...boxes].every((box) => box.innerText !== "")) {
    showTie();
  }
};

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);



const updateLocalStorage = () => {
  localStorage.setItem("playerXWins", playerXWins);
  localStorage.setItem("playerOWins", playerOWins);
  localStorage.setItem("ties", ties);
};
