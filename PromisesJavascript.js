// var promise = new Promise(function (resolve, reject) {
//   // const x = "geeksforgeeks";
//   // const y = "geeksforgeeks"
//   let a = 2 + 5;
//   if (a === 4) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// promise
//   .then(function () {
//     console.log("Success, You are a GEEK");
//   })
//   .catch(function () {
//     console.log("Some error has occurred");
//   });
//or//
// let p = new Promise((resolve, rejected) => {
//   let a = 2 + 2;
//   if (a === 4) {
//     resolve("success");
//   } else {
//     rejected("rejected");
//   }
// });
// p.then((message) => {
//   console.log("this is my code succesfully run" + " " + message);
// }).catch((message) => {
//   console.log("this is my code is rejected" + " " + message);
// });
// var promises = new Promise(function (resolve, reject) {
//   let sum = 2 + 2;
//   if (sum == 4) {
//     resolve("success");
//   } else {
//     reject("rejected");
//   }
// });
// promises
//   .then(function () {
//     console.log("your code is successfull run");
//   })
//   .catch(function () {
//     console.log("some error is occured");
//   });

var prom = new Promise(function (resolve, reject) {
  let sum = 2 + 2;
  if (sum === 4) {
    resolve("success");
  } else {
    reject("error");
  }
});
prom
  .then(function () {
    console.log("I am successfully run ");
  })
  .catch(function () {
    console.log("error is occured");
  });
