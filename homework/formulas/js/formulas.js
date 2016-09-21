
// Instructions for your homework
// //////////////////////////////////////////////////////////////////
// 1.   Here is where your functions should be defined
// 2.	 What should you name your functions?  Hint:  check the console to see which functions are already being called.  Are they all "defined?"  If not yet defined... then define them here!
// 3.	 Be sure to link up this file in your HTML doc
/////////////////////////////////////////////////////////////////////

// defining temperature conversion functions
function calcFahrenheitToCelcius (f) {
	var c= (f - 32) * 5/9
	return c
}

function calcCelciusToFarenheit (c) {
	var f=c * (9/5) + 32
	return f
}

// defining circumference calculation function
function calcCircumference (radius){
	var circumf= 2 * Math.PI * radius
	return circumf
}

// defining pythagorean theorem function
function calcLongestSide(a,b){
	var c=Math.sqrt((a*a)+(b*b))
	return c
}


