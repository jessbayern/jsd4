// correct way to reference current object is "this"
	// avoids hard-coding specific object that you are pointing to 

// defining fight object
var flight = {
	origin: "SFO",
	destination: "DEN",
	wifi: false,
	distance: 800,
	status: "delayed"
};

// defining car object
var car = {
	make: "Subaru",
	model: "Forester",
	year: 2013,
	color: "green",
	insurance: {
		provider: "Geico",
		policy: 348764
	},
	miles: 45700,
	on: false,
	speed: 0,
	addMile: function() {
		// car.miles += 1
		this.miles++;
		debugger
	},
	start: function () {
		this.on = true;
	}
};

// Property Access
// two notations
	// dot notation
		// mostly use dot notation, except for JSON and arrays
	car.year
	car.insurance.provider

	// bracket notation
		// expects a string
		// use with JSON and arrays
	car["year"]
	car["insurance"]["provider"]

// A user searches for her reservation on a hotel website, and changes the arrival date and room type.

var hotelReservation = {
	id: 711711,
	name: "Jess Bayern",
	city: "Kampala",
	Country: "Uganda",
	guests: 2,
	paid: true,
	hotel: "Serena",
	arrivalDate: "2016-11-25",
	departureDate: "2016-12-5",
	lengthOfStay: function() {
		var arrive = Math.round(new Date(this.arrivalDate)/86400000);
		var depart = Math.round(new Date(this.departureDate)/86400000);
		return depart - arrive;
	},
	roomType: "Single",
	flexibleStay: true,
	changeRoomType: function() {
		var newRoomType = prompt("Would you like a Single or Double Room?")
		this.roomType = roomType;
	},
	changeArrivalDate: function() {
		var newDate = prompt("Enter Arrival Date (YYYY-MM-DD)")
		this.arrivalDate = newDate;
		this.lengthOfStay();
	}
};

// PROTOTYPING
// use a capital letter when you are defining a prototype

// constructor
var Zipcar = function(status) {
	this.status = status;
};

// prototype
Zipcar.prototype = {
    pickup: function(){
        if (this.status == "not available") {
            return "Car not available. Call customer service & complain";
        }
        if (this.status == "available") {
            this.status = "in use";
            return "Off you go!";
        }
    },
    return: function(){
        if (this.status == "in use") {
            this.status = "available";
            return "Hope you had a nice ride!";
        }
        else return "You are not driving";
    }
};

var zipcar1 = new Zipcar("not available");
var zipcar2 = new Zipcar("available");
