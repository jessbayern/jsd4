/*
  Please add all Javascript code to this file.
*/
/* ~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
	ALL APIS
 ~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~**/
// Setup
// -----------------------------------------------
// Handlebars helper function for formatting date display
Handlebars.registerHelper('dateformat', function(date) {
    return moment(date, moment.ISO_8601).format("MM-DD-YY");
  });

// Elements
// -----------------------------------------------

// Sources
var nyt = document.querySelector(".the-new-york-times");
var guardian = document.querySelector(".the-guardian");

// Handlebars templates
var nytTemplate = document.querySelector("#nytTemplate");
var nytPopUpTemplate = document.querySelector("#nytPopUpTemplate");
var guardianTemplate = document.querySelector("#guardianTemplate");

// Other Elements
var main = document.querySelector("#main");
var popUpContent = document.querySelector("#popUp .container");
var popUp = document.querySelector("#popUp");
var exit = document.querySelector(".closePopUp")
// Clickables


// Events
// ------------------------------------------------
nyt.addEventListener('click', getNyt);
guardian.addEventListener('click', getGuardian);
main.addEventListener('click', getDetails);
exit.addEventListener('click', closePopUp);

// Functions
// ------------------------------------------------
function closePopUp(event) {
	popUp.classList.toggle("hidden");	
}

/* ~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
	THE NEW YORK TIMES
 ~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~**/

nytArticles = {}

// Event Handlers
// ------------------------------------------------
function getNyt(event) {
	event.preventDefault();
	var url = "https://api.nytimes.com/svc/topstories/v2/home.json?&api-key=3f1e57a9ebfd458bb18a07ccb06011d6";
	$.getJSON(url, nytUpdateArticles);
}

function getDetails(event) {
	var target = event.target.closest("ARTICLE");
	var targetUrl = target.id;
	console.log(targetUrl);
	nytArticles.results.forEach(function (x) {
		if (targetUrl == x.url) {
			var templateFn = Handlebars.compile(nytPopUpTemplate.innerHTML);
			popUpContent.innerHTML = templateFn(x);
		} 
	});
	popUp.classList.remove("loader"); 
	popUp.classList.toggle("hidden");	
}

// Update Page
// ------------------------------------------------
function nytUpdateArticles(json) {
	console.log('nytUpdateArticles',json);
	nytArticles = json
	main.innerHTML = '';
	var templateFn = Handlebars.compile(nytTemplate.innerHTML);
	main.innerHTML = templateFn(json);
}

/* ~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
	THE GUARDIAN
 ~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~**/
// Event Handlers
// ------------------------------------------------
function getGuardian(event) {
	event.preventDefault();
	var url = "http://content.guardianapis.com/search?api-key=50d6cc89-86f4-4606-a637-30addd1615e5&order-by=newest&show-fields=thumbnail&format=json&show-tags=keyword";
	$.getJSON(url, guardianUpdateArticles);
}

// Update Page
// ------------------------------------------------
function guardianUpdateArticles(json) {
	console.log('guardianUpdateArticles',json);
	main.innerHTML = '';
	var templateFn = Handlebars.compile(guardianTemplate.innerHTML);
	main.innerHTML = templateFn(json);
}


