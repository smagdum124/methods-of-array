// ////////defenation: closure function is nothing but a inner function is can access the ouetr function

// const outerFunction = (a) => {
//   let b = 20;
//   const innerFuntion = () => {
//     sum = a + b;
//     console.log(sum);
//   };
//   return innerFuntion();
// };
// return outerFunction(10);

const outerFunction = (b) => {
  var a = 10;
  const innerFunction = () => {
    sum = a + b;
    console.log(sum);
  };
  return innerFunction();
};
return outerFunction(25);
