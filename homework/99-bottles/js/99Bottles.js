// Elements
// ------------------------------------------
var lyrics = document.querySelector(".lyrics");

// create unordered list element and append to lyrics section
var ul = document.createElement("ul");
lyrics.appendChild(ul);


// Update page
// ------------------------------------------

// Loop through 99 to 0, desc
for(var i = 99; i >= 0; i--) {
	// conditional for handling plural/singular/no bottle scenarios
	if (i > 2) {
		line1 = i + " bottles of beer on the wall, " + i + " bottles of beer.<br/>"
		line2 = "Take one down and pass it around, " + (i-1) + " bottles of beer on the wall."
	} else if (i == 2) {
		line1 = i + " bottles of beer on the wall, " + i + " bottles of beer.<br/>"
		line2 = "Take one down and pass it around, " + (i-1) + " bottle of beer on the wall."
	} else if (i == 1) {
		line1 = i + " bottle of beer on the wall, " + i + " bottle, of beer.<br/>"
		line2 = "Take one down and pass it around, no more bottles of beer on the wall."

	} else if (i == 0) {
		line1 = "No more bottles of beer on the wall, no more bottles of beer.<br/>"
		line2 = "Go to the store and buy some more, 99 bottles of beer on the wall."
	};

	// creating list element
	var li = document.createElement("li");
	
	// setting content
	var verse = line1 + line2;
	li.innerHTML = verse;
	
	// appending to the DOM
	ul.appendChild(li);

};

console.log("99 bottles of beer on the wall!");