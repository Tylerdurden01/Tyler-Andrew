//we reserve some space in memory
let numOfYears = 9;

numOfYears = 10;

numOfYears = "ten";
//'let' allows us to reassign ^^
// Create a sentence that says the name and number of years of experience.
// The "+" is CONCATENATING our Strings
// "." notation is used to access KEYS within an OBJECT
// "Log" is a METHOD
// We INVOKE the METHOD with ().
// We pass in an ARGUMENT
"my name is " + name + ".";
console.log("my name is " + name + ".");

console.log(`My name is ${name}`);

// create a variable "timeOfDay" and assign it a string
const timeOfDay = "Evening";

// create a variable "greeting" that references a template literal

// use "timeOfDay" in the template literal to create a message like "Good morning!" or "Good evening!"
const greeting = `good $(timeOfDay)`;

// print "greeting"
console.log(greeting);
console.log(`Good ${timeOfDay}`);

// create a new variable, but do not assign it a value
let something = undefined; //Never do this!
// let something = null; //Rarely do this
//null represents the deliberate assignment of a "Nothing" value.

const useless = null;

const x = 3;

// print the variable and its type
// ? what type should we expect?

// assign the variable a value that indicates the variable is purposely blank
// ? what value should we assign?

// print the variable and its type again
// ? what type should we expect?
console.log(typeof x);

// try to print a variable that does not exist
// ? what should we expect to print in the CLI?

// print "greeting" again
// ? will this line run?

// create a variable called "name" that references a string
const name = "Ty";

// create a variable called "favoriteSong" that references a string

// create a variable called "favoriteThing" that references ANY primitive value

// print the data type of "favoriteThing"
console.log(favoriteThing);

// ! You heard a new song that became your favorite.
// Reassign the variable "favoriteSong"
const favoriteSong = "Dark Side of the Moon";

// ! You no longer like the type of data stored in "favoriteThing"
// Reassign "favoriteThing" to a different primitive data type and print its type
const favoriteThing = "food";

// ! Happy Birthday!
// Reassign "age" to a new value
const age = 50;

// ! You got a big raise at work.
// Reassign "wage" to a new value
const wage = 200000;

// ! Your raise changed your job satisfaction.
// Assign "satisfied" to true
const satisfied = true;

// use "console.log()" and "+" to print a sentence that includes two variables
console.log(`My age is ${age}.`);
