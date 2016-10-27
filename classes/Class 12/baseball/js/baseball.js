// Elements
// ------------------------------------------
var date      = document.querySelector('.date');
var games     = document.querySelector('.games');


// Templates
// ------------------------------------------
var dateTemplate = document.querySelector("#date-template");
var gameTemplate = document.querySelector("#game-template");


function updateDate(json) {
	// compile template from HTML source
	var templateFn = Handlebars.compile(dateTemplate.innerHTML);
	// evaluate json to HTML
	date.innerHTML = templateFn(json);
}

function updateGames(json) {
	console.log('updateGames',json);

	// compile template from HTML source
	var templateFn = Handlebars.compile(gameTemplate.innerHTML);
	// evaluate json to HTML
	games.innerHTML = templateFn(json);

}

updateDate(mockdata)
updateGames(mockdata)