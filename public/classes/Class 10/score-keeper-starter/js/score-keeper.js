// Setup
var scoreNumber = 0

// Elements
var score = document.querySelector("#score");
var plus = document.querySelector("#increase-5");
var minus = document.querySelector("#decrease-5");
var setScore = document.querySelector("#submit-custom-score");
var customScore = document.querySelector("#custom-score");

// Events
plus.addEventListener("click", plus5);
minus.addEventListener("click", minus5);
setScore.addEventListener("click", custom);

// Call back functions
function plus5() {
	scoreNumber += 5;
	updateScore();
};

function minus5() {
	if (scoreNumber >= 5) {	
		scoreNumber -= 5;
	updateScore()
	};
};

function custom() {
	if (customScore.value >= 0) {
		scoreNumber = parseInt(customScore.value)
	updateScore()
	};
};

function updateScore() {
	score.innerHTML = scoreNumber + " Points";
};


