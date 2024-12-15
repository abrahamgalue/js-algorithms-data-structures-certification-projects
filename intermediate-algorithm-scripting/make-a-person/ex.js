/**
 * Make a Person
 * Fill in the object constructor wit
 * the following methods below:
 * getFirstName()
 * getLastName()
 * getFullName()
 * setFirstName(first)
 * setLastName(last)
 * setFullName(firstAndLast)
 * Run the tests to see the expected output for
 * each method. The methods that take an
 * argument must accept only one argument
 * and it has to be a string. These methods must be
 * the only available means of interacting with the obj.
*/

/* freecodecamp version
const Person = function(firstAndLast) {
  let fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};
*/

export const INVALID_ARG = 'The class needs a string with the person\'s first and last name as an argument'
const fullnameRules = /^[A-Za-zÀ-ÿ]+ [A-Za-zÀ-ÿ]+$/;

export const Person = function (firstAndLast) {

  if (!fullnameRules.test(firstAndLast)) throw new Error(INVALID_ARG);


  let firstName = firstAndLast.split(" ")[0];
  let lastName = firstAndLast.split(" ")[1];

  this.getFirstName = function () {
    return firstName;
  };
  this.getLastName = function () {
    return lastName;
  };
  this.getFullName = function () {
    return firstName.concat(" ", lastName);
  };
  this.setFirstName = function (first) {
    firstName = first;
  };
  this.setLastName = function (last) {
    lastName = last;
  };
  this.setFullName = function (firstAndLast) {
    firstName = firstAndLast.split(" ")[0];
    lastName = firstAndLast.split(" ")[1];
  };
};

// test here
const bob = new Person("Bob Ross");
console.log("entries:", Object.keys(bob).length); // 6

console.log(bob.getFirstName()); // Bob
console.log(bob.getLastName()); // Ross
console.log(bob.getFullName()); // Bob Ross

bob.setFirstName("Haskell");
console.log(bob.getFullName()); // Haskell Ross

bob.setLastName("Curry");
console.log(bob.getFullName()); // Haskell Curry

bob.setFullName("Chris Kyle");
console.log(bob.getFullName()); // Chris Kyle
console.log(bob.getFirstName()); // Chris
console.log(bob.getLastName()); // Kyle
