// Setup
// ----------------------------------------------
flashId = null
runId1 = null


// Elements
stop = document.querySelector(".stop-button");
slow = document.querySelector(".slow-button");
go = document.querySelector(".go-button");
caution = document.querySelector(".caution-button");
light = document.querySelector("#traffic-light");
controls = document.querySelector(".controls");

// Structure
// ----------------------------------------------
// creating "Run" button and appending to DOM
var run = document.createElement("button");
run.innerHTML = "Run";
controls.appendChild(run);

// Events
// ----------------------------------------------
stop.addEventListener("click", turnRed);
go.addEventListener("click", turnGreen);
slow.addEventListener("click", turnYellow);
caution.addEventListener("click", flashYellow)
run.addEventListener("click", runCycle)


// Event handlers
// ----------------------------------------------
function turnRed() {
	clear();
	light.classList.add("stop");
};

function turnGreen() {
	clear();
	light.classList.add("go");
};

function turnYellow() {
	clear();
	light.classList.add("slow");
};

function flashYellow() {
	clear();
	if (!flashId) {
		flashId = setInterval(function flash() {
		light.classList.toggle("slow");
		}, 1000);
	};
};

function runCycle() {
	clear();
	if (!runId1) {
		runId1 = setInterval(runTime, 3000);
		runTime();	
	};
};

function runTime() {
	setTimeout(function red() {
		light.classList.remove("go", "stop", "slow");
		light.classList.add("stop");
		}, 0);
	setTimeout(function green() {
		light.classList.remove("go", "stop", "slow");
		light.classList.add("go");
		}, 1000);
	setTimeout(function yellow() {
		light.classList.remove("go", "stop", "slow");
		light.classList.add("slow");
		}, 2000);
};


function clear() {
	clearInterval(flashId);
	clearInterval(runId1);
	runId1 = null;
	flashId = null;
	light.classList.remove("go", "stop", "slow");
};




