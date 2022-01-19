// //[1]call:==>The call() method calls the function with a given this value and allows passing in arguments one by one separating them with commas:
// let p1 = {
//   fName: "rama",
//   lName: "kishore",
// };
// let p2 = {
//   fName: "lata",
//   lName: "mangeshkar",
// };
// function sayWelcome(greeting) {
//   console.log(greeting + " " + this.fName + " " + this.lName);
// }
// sayWelcome.call(p1, " Welcome");
// sayWelcome.call(p2, " Welcome");

// //[2]Apply:==>The apply() method calls the function with a given this value and allows passing in arguments as an array (or an array-like object)

// let p1 = {
//   fName: "rama",
//   lName: "kishore",
// };
// let p2 = {
//   fName: "lata",
//   lName: "mangeshkar",
// };
// function sayWelcome(greeting) {
//   console.log(greeting + " " + this.fName + " " + this.lName);
// }
// sayWelcome.call(p1, [" Welcome"]);
// sayWelcome.call(p2, [" Welcome"]);

// //[3]Bind:==>The bind() method returns a new function and allows passing in a this array and any number of arguments.
// let p1 = {
//   fName: "rama",
//   lName: "kishore",
// };
// let p2 = {
//   fName: "lata",
//   lName: "mangeshkar",
// };
// function sayWelcome() {
//   console.log("welcome" + " " + this.fName + " " + this.lName);
// }
// let sayWelcomerama = sayWelcome.bind(p1);
// let sayWelcomelata = sayWelcome.bind(p2);
// sayWelcome();
// sayWelcome();

// let p1 = {
//   fName: "joe",
//   lName: "doe",
// };
// let p2 = {
//   fName: "john",
//   lName: "wick",
// };
// function sayWelcome() {
//   console.log("Welcome" + " " + this.fName + " " + this.lName);
// }
// let sayWelcomejoe = sayWelcome.bind(p1);
// let sayWelcomejohn = sayWelcome.bind(p2);
// sayWelcome();
// sayWelcome();
//////////////////////////////////////////////////////////////////////
let p1 = {
  fName: "joe",
  lName: "shaikh",
};
let p2 = {
  fName: "john",
  lName: "shaikh",
};
// function sayWelcome(greeting) {
//   console.log(greeting + " " + this.fName + " " + this.lName);
// }
// sayWelcome.call(p1, ["welcome"]);
// sayWelcome.call(p1, ["welcome"]);
// function sayWelcome() {
//   console.log("Welcome" + " " + this.fName + " " + this.lName);
// }
// let sayWelcomejoe = sayWelcome.bind(p1);
// sayWelcome();
