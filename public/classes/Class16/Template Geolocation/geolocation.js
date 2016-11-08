function initMap() {
	console.log('initMap');
}


// Elements 
var button = document.querySelector('button');
var myLocation = document.querySelector('.my-location');

//Events
button.addEventListener('click',getPosition);

function getPosition(e) {
// setup
// use the geolocation API
navigator.geolocation.getCurrentPosition(updateLocation);

}

// callback function 
function updateLocation(position) {
	console.log('updateLocation');
	console.log(position);

	var latitude = position.coords.latitude; 
	var longitude = position.coords.longitude;

	myLocation.textContent = longitude + ',' + latitude;

	createGoogleMap(latitude, longitude);

}



// Google Maps API part 1
function createGoogleMap(latitude, longitude) {
	var el = document.querySelector("#google-map");

	var options = {
	  center: {lat: latitude, lng: longitude},
	  zoom: 8
	};

	var map = new google.maps.Map(el, options);
	//debugger;

	var marker = new google.maps.Marker({
		map: map,
		position: {lat: latitude, lng: longitude}
	})
}



