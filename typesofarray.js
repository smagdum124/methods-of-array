// [1]  ForEach mehtod //
// description :=>   This method can use loop over the array items and output will be come individual element in the array.

// const array = [1, 2, 3, 4, 5];
// array.forEach((item) => console.log(item));

//////////////////////////////////////////////////////////////////////////////////

// [2] Pop method
// description :=> we can pull the last itme in the array

// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.pop());
// console.log(arr);
///////////////////////////////////////////////////////////////////////////////////////

// [2] push method
// description :=> we can push the last itme in the array

// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.push(8));
// console.log(arr);

//////////////////////////////////////////////////////////////////////////////////

//[3] shift method
// Description:=> we can  pull the starting item in the array
// const arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.shift());
// console.log(arr);

/////////////////////////////////////////////////////////////////////////////////
//[3] Unshift method
// Description:=> we can  push the starting item in the array
// const arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.unshift(0));
// console.log(arr);

//////////////////////////////////////////////////////////////////////////////////

//[4] Slice Method
// Description :=> slice metod is used for slice the the array in two parts and slice can take two values first is startingindex
//and last index value . for example .slice(2,5)===>answer 30,40,50;

// and most importanat slice method is satrting index value is include and ending index value is not include

// const arr = [10, 20, 30, 40, 50, 60];
// console.log(arr.slice(2, 5));
// console.log(arr);

////////////////////////////////////////////////////////////////////////////////////////

//[5] splice method
//Description:==> splice method is also work as a slice method but main difference is in the splice method is starting index and ending index values are include

// const arr = [10, 20, 30, 40, 50, 60];
// console.log(arr.splice(2, 5));
// console.log(arr);
///////////////////////////////////////////////////////////////////////////////

//[6] Index Method
//Description:==> indexof is used to find the index no in the item arry

// const arr = [10, 20, 30, 40, 50, 60];
// console.log(arr.indexOf(30));
// console.log(arr);
///////////////////////////////////////////////////////////////////////////////////
//[7] includes method
//Description:==> includes method is used for find out the given value as argument in the array & includes method is always return in boolean

// const arr = [10, 20, 30, 40, 50, 60];
// console.log(arr.includes(30));
// console.log(arr);
////////////////////////////////////////////////////////////////////

//[8] Fill method

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.fill("kiwi", 4, 3));
// console.log(fruits);

//////////////////////////////////////////////////////////////

//[9] Mapped Method
//Description:==>The map () method in JavaScript creates an array by calling a specific function on each element present in the parent array.

// const arr = [10, 20, 30, 40, 50, 60];
// const Mapped = arr.map((m) => m + 10);
// console.log(Mapped);
////////////////////////////////////////////////////////////////

//[10] Filterd Method
//Description:==>JavaScript array filter () method creates a new array whose elements satisfy the specified condition. The filter () method accepts a callback function, and this callback function is called for every element of the array

// const arr = [10, 20, 30, 33, 40, 50, 12, 23, 60];
// const Mapped = arr.filter((m) => m % 5 == 0);
// console.log(Mapped);

//[11]sort Method////////////////////////
// const array = [12, 13, 46, 5, 4152, 55, 44];
// console.log(array.sort((a, b) => (a > b ? +1 : -1)));

//[13/join Method////////////////////////////////////
//:==>this method is used for to join the string or element in the array
// const arra2 = ["I", "Am", "Magdum", "Shaikh"];
// const array2 = arra2.join("");
// console.log(array2);

//[14] find Method ////////
// const array = [10, 20, 30, 40, 50, 60, 70];
// const array2 = array.find((item) => item > 40);
// console.log(array2);

//[15]reverse Method/////////
// const array = [1, 2, 3, 4, 5, 6];
// const array2 = array.reverse();
// console.log(array2);

//[16]concat Method///////
//:==> join two or more arrays in one array
// const array = [1, 2, 3, 4, 5];
// const array2 = [6, 7, 8, 9];
// console.log(array.concat(array2));

//[17] length /////////
// const array = [10, 20, 30, 40, 50];
// console.log(array.length);

//[18] Fill///////////
//fill:==> fill method is used for fill the element in the empty array.
// const array = new Array(3);
// console.log(array.fill(10));

//[19]Some Method/////////
//some :==> this method is check the at least one element in athe arrray is true and return answer is true
// const array = [10, 20, 30, 40, 5, 06, 0];
// const array2 = array.some((item) => item > 20);
// console.log(array2);

//[20]Every Method /////
// Every method :==> in this method all elements are true in the array either return false
// const array = [10, 20, 30, 40, 5, 06, 0];
// const array2 = array.every((item) => item > 20);
// console.log(array2);

//[21] Reducer method//////
// Reducer Method":=> reducer method is used for sum of all araay element in the array.
// const array = [10, 20, 30, 40, 50, 60];
// const array2 = array.reduce((a, b) => a + b);
// console.log(array2);

//// FizzBizz////////////////////////
// function num() {
//     if (typeof num === "number") {
//       return "Not a Number";
//     } else if (num % 3 == 0 && num % 5) {
//       return "not a fizzBizz Number";
//     } else if (num % 3 == 0) {
//       return "fizz";
//     } else if (num % 5 == 0) {
//       return "Bizz";
//     } else {
//       return "Not FizzBiz Number";
//     }
//   }
//   console.log(num(3));
