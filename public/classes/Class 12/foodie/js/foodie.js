// Elements
// ------------------------------------
var form = document.querySelector("form");
var zip = document.querySelector("form .zip");
var results = document.querySelector(".results");

var restaurantTemplate = document.querySelector("#restaurant-template");


// Event
// ------------------------------------
form.addEventListener('submit', getRestaurants);


// Event Handler 
// ------------------------------------
function getRestaurants(event) {
	event.preventDefault();

	var search = zip.value;
	console.log(search);

	var url = "http://opentable.herokuapp.com/api/restaurants?zip=" + search;

	$.getJSON(url, updateRestaurants);
}

// Update page
// ------------------------------------
function updateRestaurants(json) {
	console.log('updateRestaurants',json);

	// clears out the old results
	results.innerHTML = '';

	// Handlebars step 2: compile template from HTML source
	var templateFn = Handlebars.compile(restaurantTemplate.innerHTML);

	// Handlebars step 3:
	// var html = templateFn(json);
	// results.innerHTML = html
	results.innerHTML = templateFn(json);

}






