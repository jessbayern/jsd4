// Structure
// ------------------------------------------
var button    = document.querySelector('main button');
var addresses = document.querySelector('main .addresses');


// Events
// ------------------------------------------
button.addEventListener('click', generateAddress);


// Setup
// ------------------------------------------
// TODO: create your arrays here (street, city, state, etc)
var street = ["Spruce", "Keeler", "Hayes"]
var city = ["Cold Spring Harbor", "Dallas", "Sunnyvale"]
var state = ["New York", "California", "Washington"]
var number = [1240, 123, 8]
var zip = [94117, 11780, 34587]


// Event Listeners
// ------------------------------------------
function generateAddress(e) {
	// TODO: randomly select one item from each of these arrays 
	//       and then use them to construct a random address
	var newNumber = number[Math.floor(Math.random()*number.length)];
	var newStreet = street[Math.floor(Math.random()*street.length)];
	var newCity = city[Math.floor(Math.random()*city.length)];
	var newState = state[Math.floor(Math.random()*state.length)];
	var newZip = zip[Math.floor(Math.random()*zip.length)];

	var newAddress = newNumber +" " + newStreet + ", " + newCity + ", " + newState + ", " + newZip

addAddress(newAddress);
};


// Update page functions
// ------------------------------------------
function addAddress(address) {
	var li = document.createElement('li');
	li.innerHTML = address;
	addresses.appendChild(li);
}




