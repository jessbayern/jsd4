// timeouts take two arguments, function and time
// time is in milliseconds
// setTimeout(changeGreen, 3000);

// setInterval(changeYellow, 2000);

// Setup
var color = "red";
var timeId = null;
var blinkId = null;
// Timer Function
function changeColor() {
	if (color == "red") {
		color = changeGreen();
	} else if (color == "green") {
		color = changeYellow();
	} else if (color == "yellow") {
		color = changeRed();
	} else {
		color = changeGreen();
	}
}

// Function start
function start() {
	stop();
	if (timeId == null){
	timeId= setInterval(changeColor, 2000);	
	} else {
		console.log("error: already started");
	}
}

function blink() {
	if (color == "yellow") {
		color = changeOff();
	} else if (color == "off") {
		color = changeYellow();
	}
}

// Function stop
function stop() {
	clearInterval(timeId);
	clearInterval(blinkId);
	color = "off";
	timeId = null;
	blinkId = null;
	return color;
}

// Function nightTime mode, blinks yellow
function nightTime() {
	changeYellow();
	stop();
	blinkId = setInterval(blink, 1000);	
}

// Color change functions
function changeGreen() {
	console.log("Green");
	return "green";
}

function changeYellow() {
	console.log("Yellow");
	return "yellow";
}

function changeRed() {
	console.log("Red");
	return "red";
}

function changeOff() {
	console.log("off");
	return "off";
}



// Clear, to stop function
// clearInterval(timeId);