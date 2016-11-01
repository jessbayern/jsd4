// Setup

var json = {
  "active" : "red",
  "colors": [
  	"red",
  	"olive",
  	"rebeccapurple",
  	"skyblue"
  ]
}


// Establish a connection with Firebase
// (create a new Firebase db reference)
var ref = new Firebase("https://jsd4-eb1c7.firebaseio.com");

// Elements
var button = document.querySelector("button");

// Events
button.addEventListener("click", saveChanges);

function saveChanges(e) {
	console.log('saveChanges');

	ref.set(json);

}

ref.on('value', updateApp);

function updateApp(snapshot) {
	console.log(snapshot.val());
	json = snapshot.val();

	document.body.style.background = json.active
}
