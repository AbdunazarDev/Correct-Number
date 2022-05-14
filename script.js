'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function displayMessage(msg) {
	document.querySelector(".message").textContent = msg;
}

console.log(secretNumber);

const check = document.querySelector('.check');

check.addEventListener("click", function() {
	const guess = Number(document.querySelector('.guess').value); // Number() bu string ni number o'girib beradi
	//when input is empty
	if (!guess) {
		displayMessage("🛑 No number") ;}
	// winner
	else if (guess === secretNumber) {
		displayMessage("🎉 Correct Number");
		document.body.style.backgroundColor = 'green'
		document.querySelector(".number").textContent = secretNumber
		if (score > highscore) {
			highscore = score
			document.querySelector('.highscore').textContent = highscore
		}
	}
	
	
	// game over

	if (guess !== secretNumber) {
		if (score > 1) {
			displayMessage(guess > secretNumber ? "↗️ To high!" : "↘️ To low")
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			document.querySelector('.message').textContent = '💥 You lost the game';
		}
	}
})