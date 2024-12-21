'use strict';

//Function scope

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      // Block scope

      var millenial = true; //variable with var declaration is not block scope, but a function scope.

      // Creating NEW variable with same name as outer scope's variable.
      const firstName = 'Dogesh'; // if we declare firstname inside block it will print it in the code below as JS try to look variable name in current scope, if it is not there then it will check it in scope chain.

      //Reassigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        // here this function is block scope so we can't use it outside the block
        return a + b;
      }
    }
    console.log(millenial); //that's why we can print it outside the block. But, we can't print str variable as it is declared with const and is block scope.
    console.log(output);
  }
  printAge();

  return age;
}

//Global scope

const firstName = 'Chintu';
calcAge(1995);
