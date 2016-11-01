// Structure
// ------------------------------------------
var input  = document.querySelector('.age-check input');
var button = document.querySelector('.age-check button');
var p      = document.querySelector('.age-check p');


// Events
// ------------------------------------------
button.addEventListener('click', checkAge);


// Event Listeners
// ------------------------------------------
function checkAge(e) {
	var age = parseInt(input.value);
	var privilege = getPrivilege(age);
	displayPrivilege(privilege);
}


// Update page functions
// ------------------------------------------
function displayPrivilege(privilege) {
	p.innerHTML = privilege
}




// Determine the privilege to display
// ------------------------------------------

// TODO: write the getPrivilege function here
	function getPrivilege(age) {
		var privilege;
		if (age < 16) {
			privilege = "you cannot do much outside of going to school";
		} else if (age >= 16 && age < 18) {
			privilege = "you can drive";
		} else if (age >= 18 && age < 21) {
			privilege = "you can vote";
		} else if (age >= 21 && age < 25) {
			privilege = "you can drink";
		} else if (age >= 25 && age < 35) {
			privilege = "you can rent a car";
		} else if (age >= 35 && age < 62) {
			privilege = "you can run for president";
		} else if (age >= 62) {
			privilege = "you can collect social security benefits";
		} else {
			privilege = "that's not an age!"
		}
		return privilege
	}