// querySelector
// returns first matching element
// you can get as specific as you write the CSS

// examples
document.querySelector("ul")
document.querySelector("li")
document.querySelector(".brands")
document.querySelector("body .brands li:nth-child(2)")

// get the ul from the DOM
var brands = document.querySelector(".brands")

// createElement

// created but don't have a parent
// every element except for document must have a parent
// parent is html
	// document.createElement("p")
	// document.createElement("div")
	// document.createElement("h1")
	// document.createElement("ul")
// create new li element
var li = document.createElement("li");

// appendChild
// how we get things into the DOM

// set the text content of the new li
li.innerHTML = "reebok";

// add the new li to the dom
brands.appendChild(li);

