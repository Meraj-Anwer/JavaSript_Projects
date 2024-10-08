let userScore = 0;
let compScore = 0;
let drawScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');

const user_score = document.querySelector('#user-score');
const comp_score = document.querySelector('#comp-score');
const draw_score = document.querySelector('#draw-score');

const dramGame = () => {
    drawScore++;
    draw_score.innerText = drawScore;
    console.log('Game was Draw.');
    msg.innerText = 'Game was Draw. Play again.';
    msg.style.backgroundColor = '#636e72';
}
const gencompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const showWinner = (userWin, compChoice, userChoice) => {
    if (userWin) {
        userScore++
        user_score.innerText = userScore;
        console.log('youWin!');
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = 'green';
    } else {
        compScore++
        comp_score.innerText = compScore;
        console.log('youLose!');
        msg.innerText = `You Lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = 'red';
    }
}
const playGame = (userChoice) => {
    console.log('userChoice =', userChoice);
    const compChoice = gencompChoice();
    console.log('compChoice = ', compChoice);

    if (userChoice === compChoice) {
        dramGame();
    } else {
        let userWin = true;
        if (userChoice === 'rock') {
            // paper, scissors
            userWin = compChoice === 'paper' ? false : true;
        } else if (userChoice === 'paper') {
            // rock, scissors
            userWin = compChoice === 'scissors' ? false : true;
        } else {
            // scissors
            userWin = compChoice === 'rock' ? false : true;
        }
        showWinner(userWin, compChoice, userChoice);
    }

}
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});