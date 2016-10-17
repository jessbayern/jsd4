// when this EVENT happens
// call this EVENT HANDLER FUNCTION
// on this ELEMENT

// EVENTS
	/*
	e.g. click, mouseover, load, submit

	properties
		-type
			*string
		-target
			*element
	method
		-preventDefault()
			*prevents the page from reloading on a submit event
			*prevents reload for link clicking
// Example syntax
	Element.addEventListener(eventtype,event callback function)
	button.addEventListener('click', refreshCart)

	// Mouse Events
		-mouseover
		-click
		-mouseout
		-doubleclick
	// Keyboard
		-keydown
		-keypress
		-keyup
	// UI Events
		-load
		-DOMContentLoaded
		-beforeunload
	// Touch
		-touchstart
		-touchmove
		-touchend
