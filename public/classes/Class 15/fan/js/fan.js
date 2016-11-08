// Firebase application setup
// ------------------------------------------------
  // Initialize Firebase
var config = {
	apiKey: "AIzaSyCWHBalV4QEY2Zo2SOfCKoNx8iFH9OUbps",
	authDomain: "imwiththeband-35c2b.firebaseapp.com",
	databaseURL: "https://imwiththeband-35c2b.firebaseio.com",
	storageBucket: "imwiththeband-35c2b.appspot.com",
	messagingSenderId: "615154377106"
};
firebase.initializeApp(config);

// Create Firebase application reference
// ------------------------------------------------
var db = firebase.database()

// Elements
// ------------------------------------------------
var form = document.querySelector("form");
var messageEl = document.querySelector("#message");
var messageBoard = document.querySelector(".message-board");

// Events
// ------------------------------------------------
form.addEventListener('submit', submitForm);
document.addEventListener('DOMContentLoaded', loadState)

function submitForm(event) {
	event.preventDefault();
	var messageText = messageEl.value;

	messageEl.value='';
	console.log(messageText);

	var ref = db.ref('messages');

	var messageObj = {
		content: messageText,
		votes: 0
	};
	ref.push(messageObj);
}

function loadState() {
	db.ref('messages').on('value', createMessages)
}

function createMessages(results) {
	console.log('createMessages', results.val());
	var newMessages = results.val();

	messageBoard.innerHTML = ''

	for (var id in newMessages) {
		// console.log(newMessages[i]);
		createMessage(id, newMessages[id]);
	}
}

// Update Page

function createMessage(id, message) {
	var li = document.createElement("li");
	li.innerHTML = message.content;
	li.id = id;
	messageBoard.appendChild(li)

	li.addEventListener('click', destroyMessage)
}

function destroyMessage(event) {
	// find message with objectID equal to the
	// id we're searching with
	id = event.target.id;
	var ref = db.ref('messages/' + id)
	ref.remove();
}

