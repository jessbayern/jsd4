// creates a new array
var a = [1,2,3,5,8,13,21];

// put items in with push or by index Number
	// Index Number ...BAD
	a[3] = 11;
	a[a.length-1] = 21;

	// Push Method... GOOD
	a.push(34);
// Retrieving or Removing one item with pop or reference index
	// Remove the last item (34)
	a.pop();
	// each time you pop the array length shrinks by one
	console.log (a.length);
	// storing the last item in the array in a variable, 
	// so you can use it before you pop it off
	var b = a.pop();
	console.log(b);

/* forEach Loops
	1. need to have array set up
	2. a.forEach(function)
	3. need to have function ready to call back
*/
// TECHNIQUE #1 - forEach LOOP

// Setup
var total = 0;

a.forEach(add);

// named function
function add(number, index) {
	total = total + number;
	// or total += number
	console.log(index,number);
}

console.log("total",total);

// anonymous function
var days=["Mon", "Tues", "Wed"]

days.forEach(function(item) {
	console.log(item);
});

// TECHNIQUE #2 - for LOOP
// 

var colors = ["red", "orange", "blue"];
for (var i = 0; i < colors.length; i++) {
	console.log(i, colors[i]);
}
/**
* Arrays
* Most of your answers should be stored in variables called q1, q2 etc..
* and the variables printed to the console.
*
* For example:
* var q0 = "abc"
* console.log("Question 0" + q0)
*/

/** Question 1
* Create an array of image source filenames.
* Use "image1.png", "image2.png", and "image3.png" as the array values.
*/
// var q1=["image1.png", "image2.png", "image3.png"]
// console.log("Question 1", q1)


/** Question 2
* Using the array from Question 1, store the first element of the array
* in variable q2.
*/
// var q2=q1[0]
// console.log("Question 2", q2)


/** Question 3
* Get the length of the first array (number of elements in the array)
* and store it in variable q3
*/
// var q3=q1.length
// console.log("Question 3", q3)

/** Question 4
* Using the array from Question 1, store the last element of the array
* in variable q4. Hint: How can we get the number of elements in the array?
*/
// var q4=q1[q1.length-1]
// console.log("Question 4", q4)

// ____________________________________________________________________________

/**
* Arrays + Iteration
*/

/**
* Question 5
* Create an array of numbers using 1, 2, 3, and 4 as values.
* Use a for loop, a forEach loop function to increase
* each value by 1. You can either store each new value back in the original
* array, or in a new array -- your choice. The end result should be
* an array of numbers with values 2, 3, 4, and 5.
*/
var q5=[1,2,3,4];

q5.forEach(addOne);

function addOne(number, index) {
	console.log("fn addOne");
	q5[index] = number + 1;
};

console.log(q5);

/**
* Question 6
* Using the array from Question 5, find the average of the numbers in the array
* (average = sum of all numbers/number of numbers). Store the average in q6.
*/
var total = 0

q5.forEach(sum);

function sum(number) {
	console.log("fn add");
	total += number;
};

var q6 = total / (q5.length);
console.log(q6)

