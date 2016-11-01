// Elements
// ------------------------------------
var form = document.querySelector("form");
var zip = document.querySelector("form .zip");
var results = document.querySelector(".results");


// Event
// ------------------------------------
form.addEventListener('submit', getRestaurants);


// Event Handler 
// ------------------------------------
function getRestaurants(event) {
	event.preventDefault();
	console.log(zip.value);

	var search = zip.value;

	var url = "http://opentable.herokuapp.com/api/restaurants?zip=" + search;
	
	jQuery.getJSON(url, updateRestaurants);

	// clearing zip form
	zip.value = "";
};

// Update page
// ------------------------------------
function updateRestaurants(json) {
	console.log("updateRestaurants", json);
	// clear out results element
		results.innerHTML = "";

	json.restaurants.forEach(function(restaurant) {
		console.log(restaurant.name);

		var li = document.createElement("li");
		var p = document.createElement("p");
		var h2 = document.createElement("h2");

		h2.innerHTML = restaurant.name;
		p.innerHTML = restaurant.address;

		li.appendChild(h2)
		li.appendChild(p)
		results.appendChild(li)
	});
};
