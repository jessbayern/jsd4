// Elements
var ul = document.querySelector("ul");
var body = document.querySelector("body");
// var red = document.querySelector(".red");
// var olive = document.querySelector(".olive");
// var rebeccapurple = document.querySelector(".rebeccapurple");
// var skyblue = document.querySelector(".skyblue");

// Transitions, adding classes to each other
body.classList.add("skyblue");

// deletes everything that is there and re-assigns
body.className = "olive";
body.className = "skyblue";

// Events
// red.addEventListener("click", turnRed);
// olive.addEventListener("click", turnOlive);
// rebeccapurple.addEventListener("click", turnPurple);
// skyblue.addEventListener("click", turnBlue);

ul.addEventListener("click", changeColor);

// Event Handlers
function changeColor(event) {
	// return early if li isn't clicked
	if (event.target.tagName != "LI") {
		return;
	};
	console.log("fn ChangeColor", event);
	console.log("class", event.target.className)

	body.className = event.target.className;
};

// function turnOlive() {
// 	body.className = "olive";
// };

// function turnBlue() {
// 	body.className = "skyblue";
// };

// function turnPurple() {
// 	body.className = "rebeccapurple";
// };

function turnRed() {
	body.className = "red";
};