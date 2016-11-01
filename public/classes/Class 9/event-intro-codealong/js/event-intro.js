// Setup
var counter = 0
// Elements
var main = document.querySelector("main");

// Create Element
var p = document.createElement("p");
p.innerHTML = counter;
main.appendChild(p);

// createEvent function takes event category as parameter
var me = document.createEvent("MouseEvent")
//Set properties

	// type
	me.initEvent("dblclick");
	// target
	main.dispatchEvent(me);

// Event Listener
// main.addEventListener("dblclick", count);
p.addEventListener("click", clickCircle);

// Event Handler callback function
function count() {
	counter++;
	console.log("count", counter);
	// can add other functions within this function
	// doThis()
	// doThat()
}

function clickCircle(event) {
	counter++;
	p.innerHTML = counter;
	console.log(x)
	console.log("type", event.type)
	console.log("target",event.target)
	console.log("content",event.target.innerHTML)


}

