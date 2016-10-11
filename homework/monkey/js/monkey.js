/*Work with a partner to create a monkey object, which has the following properties:

* name
* species
* foodsEaten

And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).

*/

// use a capital letter when you are defining a prototype

// constructor
var Monkey = function(name, foodsEaten, species) {
	this.name = name;
	this.foodsEaten = foodsEaten;
	this.species = species
};

// prototype
Monkey.prototype = {
	eatSomething: function() {
		return "Yum, I love eating " + this.foodsEaten + "!";
	},
	introduce: function() {
		return "Hi, I'm " + this.name + "! I'm a " + this.species + " who eats " + this.foodsEaten + "."
	}
};   

var monkey1 = new Monkey("Jack", "bananas, oranges, and apples", "golden lion tamarin");
var monkey2 = new Monkey("Dave", "toast", "baboon");
var monkey3 = new Monkey("Sam", "raw eggs", "gorilla");

