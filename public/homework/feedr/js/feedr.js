/*
  Please add all Javascript code to this file.
*/
/* ~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
	MAIN STRUCTURE
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

// Events
// ------------------------------------------------
nyt.addEventListener('click', getNyt);
guardian.addEventListener('click', getGuardian);
main.addEventListener('click', getDetails);
exit.addEventListener('click', closePopUp);

// Universal Event Handlers
// ------------------------------------------------
function closePopUp(event) {
	popUp.classList.toggle("hidden");	
}

function getDetails(event) {
	if (main.classList.contains("nyt")) {
		getNytDetails(event);
	} else if (main.classList.contains("guardian")) {
		getGuardianDetails(event);
	};

	popUp.classList.remove("loader"); 
	popUp.classList.toggle("hidden");
}

// Instructions at page load
main.innerHTML = "Please Select a News Source";

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
	main.classList.remove("guardian");
	main.classList.add("nyt");
}

function getNytDetails(event) {
	var target = event.target.closest("ARTICLE");
	var targetUrl = target.id;
	console.log(targetUrl);
	nytArticles.results.forEach(function (x) {
		if (targetUrl == x.url) {
			var templateFn = Handlebars.compile(nytPopUpTemplate.innerHTML);
			popUpContent.innerHTML = templateFn(x);
		} 
	});	
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
guardianArticles = {}

// Event Handlers
// ------------------------------------------------
function getGuardian(event) {
	event.preventDefault();
	var url = "http://content.guardianapis.com/search?api-key=50d6cc89-86f4-4606-a637-30addd1615e5&order-by=newest&show-fields=thumbnail&format=json&show-blocks=body:key-events";
	$.getJSON(url, guardianUpdateArticles);
	main.classList.remove("nyt");
	main.classList.add("guardian");
}

function getGuardianDetails(event) {
	var target = event.target.closest("ARTICLE");
	var targetId = target.id;
	console.log(targetId);
	guardianArticles.response.results.forEach(function (x) {
		if (targetId == x.id) {
			var templateFn = Handlebars.compile(guardianPopUpTemplate.innerHTML);
			popUpContent.innerHTML = templateFn(x);
		} 
	});
	// var summary = document.querySelector(".summary");
	// if (summary.innerHTML == null) {
	// 	summary.innerHTML = "No Summary Available"
	// };	
}

// Update Page
// ------------------------------------------------
function guardianUpdateArticles(json) {
	console.log('guardianUpdateArticles',json);
	guardianArticles = json;
	main.innerHTML = '';
	var templateFn = Handlebars.compile(guardianTemplate.innerHTML);
	main.innerHTML = templateFn(json);
}


