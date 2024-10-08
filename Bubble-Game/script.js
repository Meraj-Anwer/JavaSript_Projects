let timer = 7;
let score = 0;
let newhit = "";

function makeBubble() {
  let bubble = "";

  for (i = 1; i <= 85; i++) {
    let randomValue = Math.floor(Math.random() * 10);
    bubble += `<div class="bubble">${randomValue}</div>`;
  }

  document.querySelector("#panel_bottom").innerHTML = bubble;
}

function newHit() {
  newhit = Math.floor(Math.random() * 10);
  document.querySelector("#newHit").textContent = newhit;
}

function runTimer() {
  let timeInt = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#runTime").textContent = timer;
    } else {
      clearInterval(timeInt);
      resetGame();
    }
  }, 1000);
}

function increaseScore() {
  score += 10;
  document.querySelector("#increaseScore").textContent = score;
}

function resetGame() {
  timer = 0;
  score = 0;
  newhit = 0;

  document.querySelector("#runTime").textContent = timer;
  document.querySelector("#increaseScore").textContent = score;
  document.querySelector("#newHit").textContent = newhit;

  document.querySelector("#panel_bottom").textContent = `Game Over`;
}

document
  .querySelector("#panel_bottom")
  .addEventListener("click", function (details) {
    let clickNumber = Number(details.target.textContent);

    if (clickNumber === newhit && timer > 0) {
      increaseScore();
      makeBubble();
      newHit();
    }
  });

makeBubble();
newHit();
runTimer();
increaseScore();
