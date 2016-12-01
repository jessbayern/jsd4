console.log('hello sticky notes');

// Elements
// ---------------------------
var container = document.querySelector(".container");
var button = document.querySelector("button");
var boxColor = document.querySelector(".box-color");
var boxNote = document.querySelector(".box-note");

var noteCount = 0;

window.addEventListener('load', function() {
	var noteCount = 1;

	button.addEventListener('click', addNote) 
	
	function addNote(e) {
		console.log('click');
		var color = boxColor.value;
		var note = boxNote.value

		// create element
		var div = document.createElement('div');

		// add content
		div.id = "note-" + noteCount;
		div.classList.add('box');
		div.innerHTML = note;
		div.style.backgroundColor = color;
		div.addEventListener('click', deleteNote)

		// append the DOM
		container.appendChild(div);

		noteCount ++;
	};

	function deleteNote(e) {
		console.log('deleteNote', e);

		var id = this.id

		// same as 
		// e.target.id

		var div = document.querySelector('#' + id);
		container.removeChild(div);
	};
});
