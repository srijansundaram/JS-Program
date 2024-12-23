'use strict';

// Execution context consist of variable environment(hoisting), scope chain and this keyword.

// Scoping

//Function scope

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) { // all the elements inside if block is block scope

//       var millenial = true; //variable with var declaration is not block scope, but a function scope.

//       // Creating NEW variable with same name as outer scope's variable.
//       const firstName = 'Dogesh'; // if we declare firstname inside block it will print it in the code below as JS try to look variable name in current scope, if it is not there then it will check it in scope chain.

//       //Reassigning outer scope's variable
//       output = 'NEW OUTPUT!';

//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         // here this function is block scope so we can't use it outside the block
//         return a + b;
//       }
//     }
//     console.log(millenial); //that's why we can print it outside the block. But, we can't print str variable as it is declared with const and is block scope.
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

//Global scope

// const firstName = 'Chintu';
// calcAge(1995);

// End Scoping

// Hoisting
// makes some types of variables accessible/usable in the code before they are actually declared. ''Variables lifeted to the top of their scope''.

// Variables hoisting
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Chintu';
// let job = 'Software Developer';
// const year = 1991;

// Functions hoisting
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow);
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// // Example
// //this will print all products deleted to the console despite the numProducts = 10 because of hoisting as numProducts is declared with var so it is undefined and not equal to 10.
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3; // variables created with let and const do not create any propeties on the window object.

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// End Hoisting

// This keyword
// special variable that is created for every execution context(every function). It depends on how the function is called, and its value is assigned when the function is actually called.

// console.log(this); // this keyword in the global scope is the window object

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this); // inside regular function call this keyword will be undefined as we are in strict mode. in sloppy mode, it would also be the global object.
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this); // inside regular function call this keyword will be undefined as we are in strict mode. in sloppy mode, it would also be the global object.
// };
// calcAge(1980);

// const chintu = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this); // this keyword will point to chintu in this case is because chintu was the object calling that method.
//     console.log(2037 - this.year);
//   },
// };
// chintu.calcAge();

// const dogesh = {
//   year: 2017,
// };
// dogesh.calcAge = chintu.calcAge; // method borrowing
// dogesh.calcAge();

// End This keyword
