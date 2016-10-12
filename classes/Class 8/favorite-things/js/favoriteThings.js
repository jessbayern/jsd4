// Elements
// ------------------------------------------
var form = document.querySelector("body form");
var things = document.querySelector(".things")
var newThing = document.querySelector("input");

// Events
// ------------------------------------------
form.addEventListener('submit', createThing);


// Update page
// ------------------------------------------
function createThing(e) {
	e.preventDefault();
	console.log('createThing');

	// TODO: take value typed into input box and 
	// add to list

	if (!newThing.value) {
		alert("you must type in a value!");
		return;
	};

	if (newThing.value.length > 140) {
		alert("error: above 140 character limit");
		return;
	};

	var li = document.createElement("li");
	li.innerHTML = newThing.value;
	things.appendChild(li);	

	newThing.value = "";

};

