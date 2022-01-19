//interview questions///////////
// const c = "hello"; //1
// const c = "world";
// console.log(c);

//2
// const a = 1 < 2 < 3;
// console.log(a); //// flase=0

//3
// const str = "india";
// str.split(" ").reverse().join("");
// console.log(str);

// );
// // console.log(str);
// const str = "myworldmumbai";
// const arr = str.split("");
// const obj = {};
// arr.forEach((element) => {
//   obj[element] = obj[element] ? obj[element] + 1 : 1;
// });
// console.log(obj);

//////////////////////// to find the maximum number////////////
// const arr = [1, 4, 2, 7, 3, 2];
// let max = 0;
// arr.forEach((Element) => {
//   //   max = max < Element ? Element : max;
//   max = Math.max(max, Element); //this is sort hand syntax to find the maximum number in arr
// });
// console.log(max);

//or//
// const arr = [1, 4, 2, 7, 3, 2];
// const max = arr.reduce((acc, curr) => Math.max(acc, curr));

// console.log(max);
// const mag = "Magdum";
// str.split("");
// console.log(mag);
/////////////////////////////////////////////////////////////////////
// genrate random number
// const a = Math.random();
// console.log(a);

/////////////////hello word print after two serconds/////
// program to display a text using setTimeout method
// function greet() {
//   console.log("Hello world");
// }

// setTimeout(greet, 3000);
// console.log("This message is shown first");

// program to display time every 3 seconds
// function per() {
//   console.log("Heloo Word!");
//   setTimeout(per, 2000); //// display the time after 3 seconds
// }

// // calling the function
// per();

// const c = "Hello!";
// const c = "World";
// // console.log(c);

// const a = 1 < 2 < 3;
// console.log(a);

// var x = 10;
// console.log(x++);
//////////////////////////////////////////
// const arry = [10, 12, 30, 40, 50, 40];
// let max = 0;
// arry.forEach((item) => {
//   max = Math.max(max, item);
// });
// console.log(max);
////////////////////// Map Method//////////////////
// const array = [10, 20, 30, 40, 50];
// const array2 = array.map((elem) => elem + 25);
// console.log(array2);
// const array2 = array.filter((item) => item > 30);
// console.log(array2);
// const array2 = array.reduce((a, b) => a + b);
// console.log(array2);
///////////////////////////////////
// const array = [1, 55, 2, 52, 5, 55, 2, 2, 44, 5];
// let array2 = array.reduce((a, b) => a > b);
// console.log(array2);

// function greet() {
//   console.log("Hello world");
// }

// setTimeout(greet, 3000);
// console.log("This message is shown first");

////////////////////////////Fill Method////////////////////////////
// const array = new Array(3);
// const array2 = array.fill(10);
// console.log(array2);
//////////////////For Each////////
// const array = [10, 20, 30, 40, 50, 60, 70, 80];
// const array2 = array.forEach((elem) => console.log(elem));

///////////////////////////////Hoisting////////////////////////////////
// var a = 10;
// var a = 20;
// console.log(a);
// var a = 30;
/////find odd numbers in the array
// const array = [20, 63, 52, 12, 1, 3, 9, 7];
// const array2 = array.filter((elem) => (elem % 2 ===1 ));
// console.log(array2);

// const array = [5, 3, 7, 5, 1, 5];
// const array2 = array.map((item) => item * 2);     =========>double
// const array2 = array.map((item) => item * 3);     =========>triple
// const array2 = array.map((item) => item.toString(2)); ======> binary array
// console.log(array2);
/////////////////
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const array2 = array.filter((item) => item % 2 == 1);=======> output will be odd numbers
// const array2 = array.filter((elem) => elem % 2 == 0);=======> outout will be even numbers
// const array2 = array.reduce((a, b) => a + b);======> sum of all values in the array
// const array2 = array.reduce((a, b) => a > b);
// console.log(array2);
// const array2 = array.reduce((a, b) => console.log(a > b));

//////////////print hello word after two seconds////////////
// var interval = setInterval(function () {
//   console.log("Hello World");
// }, 2000);
// setTimeout(function () {
//   clearInterval(interval);
// }, 10000);
// //////////////////////////
// const array = [1, 2, 3, 4, 5, 7];
// const array2 = array.forEach((item) => console.log(item));
//////////////////////////////
// var a = 0;
// while (a <= 10) {
//   a = a + 1;

//   console.log("Hello!");
// }
// do {
//   a = a + 1;
//   console.log("Hello!");
// } while (a <= 5);
// for (var a = 0; a <= 3; a++) {
//   console.log("Hello!");
// }
// var a = {
//   Name: "ramu",
//   Age: 28,
//   State: "maharashtra",
//   Country: "India",
// };
// for (var i in a) {
//   console.log(i, " ", a[i]);
// }
/////////////closure////
// const outerFunction = (b) => {
//   let a = 10;
//   const innerFunction = () => {
//     sum = a + b;
//     console.log(sum);
//   };
//   return innerFunction();
// };
// return outerFunction(25);

/////////remove duplicate element in the array/////////

// const a = [12, 1210, 1, 30, 20, 232, 22];
// console.log(Math.min(...a));
// var a = 22;
// var a = 30;
// let a = 20;
// let a = 30;
// const a = 30;
// const b = 22;
// console.log(a);

/////////block scope/////
// function number() {
//   let age = 23;
//   console.log(age);
// }
// return number();
// const a = [1, 2, 3, 4, 5, 5, 5];
// const b = [2, 2, 2, 523, 1, 3];
// const c = a.concat(b);
// console.log(c);
///////////////////functional scope and block scope//////
// let javascript = () => {
//   if (true) {
//     let a = 10;
//     var b = 30;
//   }
//   console.log(b);
//   console.log(a);
// };
// return javascript();
/////////////////double equal and triple equal//////////////
// function number() {
//   if ("1" === 1) {
//     console.log("hello");
//   } else {
//     console.log("kon hai be tu");
//   }
// }
// return number();
/////////////diffrence in between let and const/////
// let l = 10;
// l = 20;
// console.log(l);
// const a = 20;
// a = 30;
// console.log(a);
// let a = 20;
// a = 30;
// console.log(a);
// const c = [1, 2, 3, 4, 5];
// c.push(5);
// console.log(c);

//infinity
// var num = 5;
// function display() {
//   console.log(num / 0);
// }
// return display();
/////////////////\
// const array = [[[3, 2, 1, 4, 5]]];
// const array2 = [1, 2, 3];
// const array6 = [10, 20, 30, 40, 50, 60];
// console.log(array.sort((a, b) => (a > b ? 1 : -1)));
// console.log(array2.sort((a, b) => (a < b ? 1 : -1)));
// const array3 = array.concat(array2, array6);
// const array4 = array3.filter((item, index) => array3.indexOf(item) === index);
// console.log(Math.max(...array4));
// console.log(Math.min(...array4));
// const arr = array.flat(Infinity);
// console.log(arr.indexOf(4));

// console.log(...array, ...array, array.indexOf(4));
//////////////////////////////////////////////////////

// const array = [10, 20, 230, 22, 55];
// // const array2 = array.concat(44);
// console.log(array.splice(1, 3));

// var array = [10, 20, 30, 40, 50, 60, 70];
// console.log(array.slice(1, 3));

// var arr = [10, 2, 023, 030, 20, 40];
// // for (var i = 0; i < arr.length; i++) {
// //   console.log(arr[i]);
// // }
// var arr2 = arr.forEach((item) => console.log(item));
// console.log(arr2);
// const length = 4;
// const numbers = [];
// for (var i = 0; i < length; i++);
// {
//   numbers.push(i + 1);
// }
// console.log(numbers);

//////////////////////////
// let i;
// for (i = 0; i < 3; i++) {
//   const log = () => {
//     console.log(i);
//   };
//   setTimeout(log, 100);
// }
// let value = NaN;

// if (value) {
//   console.log("truth value");
// } else {
//   console.log(" “Falsy value”");
// }

///////////////////////////////////////////
// const array = [10, 10, 20, 30, 40, 20, 30, 40, 50, 60];
// const arra2 = [10, 10, 20, 30, 40, 20, 30, 40, 50, 60];
// const array2 = array.filter((elem, index) => array.indexOf(elem) === index);
// console.log(array2);
// const array2 = array.forEach((item) => console.log(item));
// console.log(array2);
// const arr2 = array.join("");
// const array2 = array.findIndex((item) => item === 40);
// console.log(array2);

// function string(str) {
//   for (var i = str.length - 1; i >= 0; i--) {
//     console.log(str[i]);
//   }
// }
// return string("i am magdum");

// const array = [120, 20, 30, 520, 55];
// const array2 = array.forEach((item) => console.log(item));
// console.log(Math.max(array2));

//call method
// const person = {
//   fName: "savita",
//   lName: "kumari",
// };
// function myName() {
//   console.log("Hello" + " " + this.fName + " " + this.lName);
// }
// let newName = myName.bind(person);
// newName();

// var a = 1;
// while (a <= 10) {
//   a = a + 1;
//   console.log("Hello world");
// }

// do {
//   a = a + 1;
//   console.log("Hello world");
// } while (a <= 5);

// for (var a = 1; a <= 3; a++) {

//   console.log("toh chalun");
// }

// var a = {
//   fName: "Kantabai",
//   lName: "podar",
//   country: "India",
//   state: "Maharashtra",
//   work: "made",
// };
// for (let i in a) {
//   console.log(i, ": ", a[i]);
// }
// const array = [10, 203, 04, 50];
// array.forEach((item) => console.log(item));

// const str = "i am string";
// console.log(str.split());

//////////////// find the max number in the array
// const array = [10, 20, 30, 40, 50, 60, 6, 050];
// const array2 = array.find((item) => item > 50);
// console.log(array2);
// console.log(Math.max(...array));

// const str = "I am string";
// const array = [10, 2, 3, 4, 5, 6];
// console.log(typeof array);

// function myFun() {
//   console.log("hi am function");
// }
// return myFun();

// function myName() {
//   var sum = 10 + 20;
//   console.log(sum);
// }
// return myName();

// var a = 10;            //'
// var a = 20;

// var a = 30;
// console.log(a);

// const fruits = ["banana", "grapes", "apple"];
//  fruits.splice(1, 1);
// console.log(fruits);

// const array = [1, 2, 2, 3, 4, 5, 3, 4, 5, 6, 7, 8, 9];
// // const arra2 = [...array];
// const arra2 = array.filter((item, index) => array.indexOf(item) === index);
// console.log(arra2);

// const arra2 = array.filter((item) => item % 2 == 1);
// console.log(arra2);
// const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// array.forEach((item) => console.log(item));
// array.push(7);
// array.pop(6);
// array.shift(1);
// array.unshift(0);
// const array2 = array.splice(2,3);
// const array2 = array.slice(2, 4);
// const array2 = array.map((item) => item * 10);
// const array2 = array.filter((item) => item > 3);
// array.includes(3);
// console.log(array);
// const array2 = array.sort((a, b) => (a < b ? +1 : -1));
// console.log(array2);
// console.log(array.concat(array2));
// console.log(Math.max(...array));

// const obj = { fName: "Magdum", lName: "shiakh" };
// const obj2 = Object.values(obj);
// console.log(obj2);
// function outerFunction(a) {
//   let b = 10;
//   function innerFunction() {
//     sum = a + b;
//     console.log(sum);
//   }
//   return innerFunction();
// }
// return outerFunction(20);

// let complete = true;
// let prom = new Promise(function (resolve, reject) {
//   if (complete) {
//     resolve("I am successfull !");
//   } else {
//     reject("I am rejected!");
//   }
// });
// console.log(prom);

// async function test() {
//   return "hello!";
// }
// console.log(test());
// setTimeout(welcome, 1000);
// function welcome() {
//   console.log("hello");
// }

const array = [10, 20, 20, 30, 40, 30, 40, 50, 60];
// const array2 = array.map((item) => item + 2);
// const array2 = array.indexOf(20);
// console.log(array2);

// const array = ["Magdum", "shaikh"];
// const array2 = array.join(" ");
// console.log(array2);
// const array2 = array.filter((item, index) => array.indexOf(item) === index);
// const array2 = array.sort((a, b) => (a < b ? +1 : -1));

// console.log(Math.max(...array));
function myfunction(str) {
  for (var i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
  }
}
myfunction("kya chalra re bhai");
