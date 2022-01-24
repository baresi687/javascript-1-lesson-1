// Global and local scope (functional scope)

var myName = "Hreinn";

function logIn(arg) {
  let myVariable = arg; // Local scope
  return myVariable;
}

var someVar = logIn("Sudi");
console.log(someVar);

console.log(myName);

// Example 2 Callback functions

var enterSite = function () {
  console.log("Hello you entered the website");
};

function loginInToSite(arg) {
  arg();
}

loginInToSite(enterSite);

//  Assigning a function to variable

var login = function (name) {
  console.log("You may log in", name);
};

login("Hreinn");

// A function as a property of an object

var user = {
  name: "Hreinn",
  job: "Developer",
  login: function (name) {
    console.log(name);
  },
  status: "Happy",
};

console.log("My user object: ", user);
console.log("Name: ", user.name);
user.login("Hreinn");

// Window object. Global

console.dir(window); //

// const variable

const count = 1;
// count = 4; // Can't change value. Error
// count += 99;
console.log(count);

// Let variable

let countLet = 1;
countLet = 5;
countLet += 60;
countLet++;
console.log("My count is equal to: ", countLet);

// console.dir

const profile = {
  name: "Hreinn",
  age: 23,
  job: "Lawyer",
};

console.log("console.log: ", profile);
console.dir("console.dir: ", profile);

// Strings using backticks. Strings on new lines

const sentence = `One. 
Two.`;
console.log(sentence);

// Accessing object properties using brackets

console.log(profile.name);
console.log(profile["name"]);

// Moodle tasks

// 1
const instrument = "guitar";
console.log(instrument);

// 2

const button = document.querySelector("button.login");
console.dir(button); // console.dir

// 3

const instruments = [
  {
    type: "guitar",
    colour: "red",
  },
  {
    type: "piano",
    colour: "black",
  },
];
console.table(instruments);

// 4

const name = "Percival";
const age = 13;

// 5

let total = 0;
total = total + 10;

// 6

for (let i = 0; i <= 5; i++) {
  console.log(i);
}

// 7

const firstName = "Florence";

const introduction = `Hello, my name is ${firstName}`;

console.log(introduction);

// 8

const title = `Big Technical Event`;

const whatToHave = `good time`;

const welcome = `Welcome!
This ${title} is starting today.
Have a ${whatToHave}!`;

console.log(welcome);

// 9

const car = {
  "paint-colour": "red",
  "number of wheels": 3,
};
console.log(car["paint-colour"], car["number of wheels"]);

// 10

const product = {
  name: "Chicken Lips",
  price: 35,
  expired: false,
  getExpired: function () {
    console.log(this.expired);
  },
};

product.getExpired();
