//[1] copy my array
// let a = [10, 52, 54, 555, 54, 51, 54, 55];
// let b = [];
// for (let i = 0; i < a.length; i++) {
//   b.push(a[i]);
// }
// console.log(b);
//or////
// const arr = [1, 2, 2, 5, 5, 7, 7, 10, 10, 7, 9];
// const arr2 = [...arr];
// console.log(arr2);

//[2]Remove duplicate from array
// let a = [1, 1, 2, 5, 2, 3, 3, 4, 5, 6, 7]; //output [1,2,3]
// let b = [];
// for (let i = 0; i < a.length; i++) {
//   if (b.indexOf(a[i]) === -1) {
//     b.push(a[i]);
//   }
// }
// console.log(b);
//  OR
// const arr = [1, 2, 2, 5, 5, 7, 7, 10, 10, 7, 9];
// const arr2 = arr.filter((elem, index) => arr.indexOf(elem) === index);
// console.log(arr2);

//[3] find the odd number in the array
// const array = [1, 2, 3, 4, 5, 6, 7];
// const array2 = array.filter((item) => item % 2 == 1);
// console.log(array2);

//[4]find the even number in the array
// const array = [1, 2, 3, 4, 5, 6, 7];
// const array2 = array.filter((item) => item % 2 == 0);
// console.log(array2);

//[5]closure function

// const outerFunction = (b) => {
//   let a = 20;
//   const innerFunction = () => {
//     sum = a + b;
//     console.log(sum);
//   };
//   return innerFunction();
// };
// return outerFunction(30);

//[6] ForEach
// const array = [1, 12, 312, 42, 42, 4545, 45];
// const array2 = array.forEach((item) => console.log(item));

//[7]while loop
// let a = 1;
// while (a <= 10) {
//   a = a + 1;
//   console.log("Hello!");
// }

//[8] do While loop
// let a = 1;
// do {
//   a = a + 1;
//   console.log("HelloWorld");
// } while (a <= 10);

//[9]for loop
// for (let a = 1; a <= 10; a++) {
//   console.log("helloG");
// }

//[10]forin loop
// let a = {
//   Name: "khaja",
//   Age: 20,
//   state: "Maharashatra",
//   country: "India",
// };
// for (let i in a) {
//   console.log(i, ":==> ", a[i]);
// }

//[11] call Method
// let p1 = {
//   fName: "khaja",
//   lName: "shaikh",
// };
// let p2 = {
//   fName: "afrid",
//   lName: "pinjari",
// };
// function Name(greeeting) {
//   console.log(greeeting + " " + this.fName + " " + this.lName);
// }
// Name.call(p1, "AsslamuWaalekum");
// Name.call(p2, "AsslamuWaalekum");

//[13] Apply Method
// let p1 = {
//   fName: "khaja",
//   lName: "shaikh",
// };
// let p2 = {
//   fName: "afrid",
//   lName: "pinjari",
// };
// function Name(greeeting) {
//   console.log(greeeting + " " + this.fName + " " + this.lName);
// }
// Name.call(p1, ["AsslamuWaalekum"]);
// Name.call(p2, ["AsslamuWaalekum"]);

//[14]bind method
// var website = {
//   name: "Javatpoint",
//   getName: function () {
//     return this.name;
//   },
// };
// var unboundGetName = website.getName;
// var boundGetName = unboundGetName.bind(website);
// console.log(boundGetName());
// let a = {
//   Name: "asha",
//   getName: function () {
//     return this.Name;
//   },
// };
// let unbounded = a.getName;
// let bounded = unbounded.bind(a);
// console.log(bounded());

///or///
// let p1 = {
//   fName: "asha",
//   lName: "goratkar",
// };
// let p2 = {
//   fName: "najema",
//   lName: "shaikh",
// };
// function Name() {
//   console.log("welcome" + " " + this.fName + " " + this.lName);
// }
// let bachikanaam = Name.bind(p1);
// let dusribachikanaam = Name.bind(p2);
// bachikanaam();
// dusribachikanaam();

//////////// infinity/////////////
// var num = 5;
// function display() {
//   console.log(num / 0);
// }
// return display();

////////////// Boolean number///
// function display() {
//   console.log(10 < 20);
// }
// return display();
// //or//
// function display() {
//   console.log(10 > 20);
// }
// return display();

///////////array acending///////////////

// const array = [5, 6, 4, 1, 2, 3, 0];
// console.log(array.sort((a, b) => (a > b ? 1 : -1)));
//or//
// const array = [110, 20, 30, 40, 2, 66, 02];
// console.log(array.sort((a, b) => (a < b ? 1 : -1)));

////////////////////////////////////////
// var a = 10;
// var b = 20;
// a = b;
// b = a - 10;
// console.log(a);
// console.log(b);

//////////// how to convert object into array/////

// const obj = { name: "shaikh", age: 25, mobile: 14254655 };
// const obj2 = Object.values(obj);
// console.log(obj2);

//////////////////////concat the three array/////////////
// const array = [10, 20, 20, 1, 1, 52, 0];
// const array2 = [1, 2, 3, 4, 5, 6];
// const array3 = [1, 5, 5, 5, 5];
// console.log(array.concat(array2, array3));

///////////////////distruct multiple array////////////
// const array = [[[10, 20, 30, 40, 50, 50]]];
// const array2 = array.flat(Infinity);
// console.log(array2.indexOf(20));

/////////////// string is converted into array and and reverse////
// const str = "I am magdum Shaikh";
// const array = str.split("");
// console.log(array.reverse().join(""));
// reverse method by using string and
// function kya(str) {
//   var a = str.split("");
//   var b = a.reverse();

//   console.log(b.join(""));
// }
// return kya("Kya chlra re mere bhai");
//reverse without using reverse method

// function myfunction(str) {
//   for (var i = str.length - 1; i >= 0; i--) {
//     console.log(str[i]);
//   }
// }
// myfunction("kya chalra re bhai");
//or//////////
// var a = "I am string";
// for (var i = a.length - 1; i >= 0; i--) {
//   console.log(a[i]);
// }
///////////////  Temporal Dead zone///////////////////////////////////////////////////////
// function myfunction() {
//   console.log(any);
//   var any = "hiii";
// }
// return myfunction();

// curruing with closure////////////
// function calculatevolume(length) {
//   return function (bredth) {
//     return function (height) {
//       return length * bredth * height;
//     };
//   };
// }
// console.log(calculatevolume(20)(20)(20));

// global vatriables and local variables

//Local Variables :==>A JavaScript local variables are declared inside function or block and accessible only within the function or block.
// function myFunction() {
//   const a = 10;
//   console.log(a);
// }
// return myFunction();

//Gloabl Varibles:==>JavaScript global variables are accessible from any function: they can be declared outside the function or with window objects.

// var a = 30;
// function myFunction() {
//   console.log(a);
// }
// return myFunction();

/// setInterval problem/////
// var interval = setInterval(function () {
//   console.log("Hello World");
// }, 2000);
// setTimeout(function () {
//   clearInterval(interval);
// }, 10000);

// var interval = setInterval(function () {
//   console.log("Hello!");
// }, 2000);
// setTimeout(function () {
//   clearInterval(interval);
// }, 10000);

// var timer = setInterval(() => {
//   console.log("hello");
// }, 1000);
// setTimeout(() => {
//   clearInterval(interval);
// }, 10000);

//find the misiing number in the array///////

// function missing(array) {
//   let missArray = [];
//   let minArray = Math.min(...array);
//   let maxArray = Math.max(...array);
//   for (let i = minArray; i < maxArray; i++) {
//     if (array.indexOf(i) < 0) {
//       missArray.push(i);
//     }
//   }
//   return missArray;
// }
// console.log(missing([1, 2, 3, 5, 7]));

/// find the special character in the string///////////////

var sectionToCheck = "$%kl%%%%ds$";
var allFoundCharacters = sectionToCheck.match(
  /[@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g
);
console.log(allFoundCharacters.length);
