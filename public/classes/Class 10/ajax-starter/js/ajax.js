
// .getJSON()
	// takes 2 arguments
		// 1. url
		// 2. callback function

// jQuery.getJSON(url, handlePuppies);

// get a random gif, pass tag argument
function getRandomGif(tag) {
	var url = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + tag;
	jQuery.getJSON(url, handlePuppies);

	

};

// callback function
function handlePuppies(json) {
	console.log("fn handlePuppies", json);

// create and append image element
	var img = document.createElement("img");
	img.src = json.data.image_url;
	document.body.appendChild(img)
}

