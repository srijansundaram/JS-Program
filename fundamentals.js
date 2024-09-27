// Intro

    // let js = 'amazing';
    // if (js == 'amazing') alert ('JS is fun!');

    // 40+8+23-10;
    // console.log(40+8+23-10);

// End

// Values and Variables

    // Briefing

        // console.log("Jonas");
        // console.log(20);   // here 20 is value similarly above jonas is a value

        // let firstName = "Jonas";  // this is variable
        // console.log(firstName);  // here name is variable and "Jonas" is value

        // naming should be in camel case and can't start with number and also can't contain any symbol except _
        // also name should not be all uppercase, it should be in case of constant value

        // let 1name = "Jonas";  // this will give error
        // let name$ = "Jonas";  // this will give error

        // you cannot name a variable as new or function as it is reserved keyword.
        // let new = "Jonas";  // this will give error

        // also name is a keyword but we can use it
        
        // variable name is descriptive

    // End Briefing    
    
    // Practice Problems

        // Declare variables called country, continent and population and assign their values according to your own country (population in millions).
        // Log their values to the console.

        // Answer

        // let country = 'India';
        // let continent = 'Asia';
        // let population = 140;

        // console.log(country);
        // console.log(continent);
        // console.log(population);

    // End Problem  

// End Values and variables

// Data Types

    // Briefing

        // Primitive Data Types
        // Number, String(Under ""), Boolean(True or False), Undefined, Null, Symbol, BigInt 

        // let javascriptIsFun = true;
        // console.log(javascriptIsFun);

        // console.log(typeof true);
        // console.log(typeof javascriptIsFun);
        // console.log(typeof 23);
        // console.log(typeof 'chintu');

        // javascriptIsFun = 'Yes!'; //Dynamic Typing
        // console.log(typeof javascriptIsFun);

        // let year;
        // console.log(typeof year);

        // year = 1991;
        // console.log(typeof year);

        // console.log(typeof null); // returns object so it is a bug in js

    // End Briefing
    
    // Practice Problems

        // Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. 
        // Also declare a variable language, but don't assign it any value yet. Log the types of isIsland, population, country and 
        // language to the console.

        // Answer
        // let country = 'India';
        // let population = 140;
        // let isIsland = false;
        // let language;
        
        // console.log(typeof country);
        // console.log(typeof population);
        // console.log(typeof isIsland);
        // console.log(typeof language);
        
    // End Problem

// End Data Types

// let, const, var

    // Briefing

        // let and const are block scoped while var is function scoped
        // let and const are used for declaring variables in modern JavaScript while var is used in older JavaScript

        // let age = 30;
        // age = 31; // mutate the age variable, in this case let is used or in case of empty variable
        
        // const birthYear= 1991; // used in case when the value of a variable doesn't need to change
        // birthYear = 1990; // will give error as invalid assignment
        // when using const intial value is needed (variable can't be empty like we do with let)

        // var job = 'programmer'; // old way (different from let will discuss later)
        // job = 'teacher';

    // End Briefing
    
    // Practice Problems

        // Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one).
        // Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
        // Try to change one of the changed variables now, and observe what happens.

        // Answer
        // let language = 'Maithili';
        // console.log(language);
        // language = 'Hindi';
        // console.log(language);
        // const country = 'India';
        // const continent = 'Asia';

    // End Problem

// End let, const, var;

// Basic Operators

    // Briefing
    
        // Arithmetic Operator
        // const now = 2037
        // const ageChintu = now - 1969;
        // const ageRohan = now - 1991;
        // console.log(ageChintu, ageRohan);

        // console.log(ageChintu * 2, ageChintu / 10, 2 ** 3) 

        // const firstName = 'Chintu';
        // const lastName = 'Tyagi';
        // console.log(firstName + ' ' + lastName);

        // typeof operator disscussed earlier already

        // Assignment operator
        // let x = 10 + 5; //15
        // x += 10; // x = x + 10
        // x *= 4;
        // x++; // x = x + 1
        // x--; // x = x - 1
        // console.log(x);

        // comaprision operators
        // console.log(ageChintu > ageRohan);
        // similarly we have <, >=, <=

    // End Briefing

    // Practice Problem

        // If your country split in half, and each half would contain half the population, then how many people would live in each half?
        // Increase the population of your country by 1 and log the result to the console.
        // Finland has a population of 6 million. Does your country have more people than Finland?
        // average population of a country is 33 million people. Does you country have less people than the average country?
        //Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.

        // Answer
        // let populationIndia = 140;
        // console.log(populationIndia/2);
        // populationIndia++;
        // console.log(populationIndia);
        // const populationFinland = 6;
        // console.log(populationFinland > populationIndia);
        // console.log(populationIndia < 33);

        // const description = 'India is in asia, and its ' + populationIndia + ' million people speak Hindi';
        // console.log(description);

    // End Problem

// End Basic Operators

// Operator Precedence

    // Briefing 

        // Parentheses ()
        // Exponentiation (right to left)**
        // Unary operators +, -, !, ~, typeof, void, delete
        // Multiplication, Division, Modulus (left to right) *, /, %
        // Addition, Subtraction (left to right) +, -
        // Bitwise Shift <<, >>, >>>
        // Relational operators <, >, <=, >=, in, instanceof
        // Equality operators ==, !=, ===, !==
        // Bitwise AND &
        // Bitwise XOR ^
        // Bitwise OR |
        // Logical AND &&
        // Logical OR ||
        // Conditional (right to left) (ternary) operator ?:
        // Assignment operators (right to left) =, +=, -=, *=, /=, %=, **=, etc.

        // const now = 2037
        // const ageChintu = now - 1969;
        // const ageRohan = now - 1991; 

        // console.log(now - 1991 > now - 2018);

        // console.log(25-10-5);

        // let x, y;
        // x = y = 25 - 10 - 5;
        // console.log(x,y);

        // let averageAge = (ageChintu + ageRohan)/2;
        // console.log(ageChintu, ageRohan, averageAge);

    // End Briefing

// End Operator Precedence

// Coding Challenge 1

    // Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).
    // Your task is to write some code to help them:
    // Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.
    // Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.
    // Log the value of BMIMark and BMIJohn to the console.
    // BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too
    // TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
    // TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

    // Answer
    // let massMark = 78;
    // let heightMark = 1.69;
    // let massJohn = 92; 
    // let heightJohn = 1.76;

    // let BMIMark = massMark / (heightMark * heightMark);
    // let BMIJohn = massJohn / (heightJohn * heightJohn);
    
    // console.log(BMIMark);
    // console.log(BMIJohn);
    
    // let markHigherBMI = BMIMark  > BMIJohn;
    // console.log(markHigherBMI);
    
    // massMark = 95;
    // heightMark = 1.88;
    // massJohn = 85;
    // heightJohn = 1.76;
    
    // BMIMark = massMark / (heightMark * heightMark);
    // BMIJohn = massJohn / (heightJohn * heightJohn);

    // console.log(BMIMark);
    // console.log(BMIJohn);

    // markHigherBMI = BMIMark > BMIJohn;
    // console.log(markHigherBMI);

//End Challenge

// Strings and Template Literal

    // Briefing
        // const firstName = 'John';
        // const job = 'teacher';
        // const birthYear = 1990;

        // const john = "I'm " + firstName + ', a ' + job + ' born in ' + birthYear + ' .';
        // console.log(john);

        // // Template Literals
        // const johnNew = `I'm ${firstName}, a ${job} born in ${birthYear}. `;
        // console.log(johnNew);
        // console.log('String with \n\
        // multiple \n\
        // lines');
        // console.log(`String with
        // multiple
        // lines`);   

    // End Briefing

    // Practice Problems

        // Recreate the description variable from the last assignment, this time using the template literal syntax.
    
        // Answer
        // const country = 'India';
        // const continent = 'Asia';
        // const population = 140;
    
        // const description = `${country} is a country in ${continent} continent having population of ${population} million people.`
        // console.log(description);

    // End Problem

// End Strings and Template Literal

// If else statements

    // Briefing

        //   const age = 15;
        //   const isOldEnough = age>=18;

        //   if (isOldEnough) {
        //     console.log(`Your age is ${age}, so you can drive.`)
        //   }
        //   else{
        //     console.log(`Your age is ${age}, so you can't drive.`)
        //   }

    // End Briefing

    // Practice Problems

        // If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million 
        // below average" (the 22 is the average of 33 minus the country's population).
        // After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population 
        // back to original.

        // Answer
        // const country = 'India';
        // let population = 13;
        
        // if (population > 33) {
        //     console.log(`${country}'s population is above average.`);
        // }
        // else{
        //     console.log(`${country}'s population is ${33-population} million below average`);
        // }

    // End Problem

// End if else

// Coding Challenge 2

    // Use the BMI example from Challenge #1, and the code you already wrote, and improve it:
    // 1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:
    // "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".
    // 2. Modify the outputs above to use template literals to include the BMI values in the outputs.
    // Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

    // Answer:
    // const massMark = 78;
    // const heightMark = 1.69;
    // const massJohn = 92; 
    // const heightJohn = 1.76;

    // const BMIMark = massMark / (heightMark * heightMark);
    // const BMIJohn = massJohn / (heightJohn * heightJohn);
    // console.log(BMIMark, BMIJohn);

    // if (BMIMark > BMIJohn) {
    //     // console.log("Mark's BMI is higher than John's!")
    //     console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`)
    // }
    // else{
    //     // console.log("John's BMI is higher than Mark's!")
    //     console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`)
    // }

// End challenge

// Type conversion and coercion

    //Briefing

        // Type conversion is when we explicitly convert a value from one data type to another.
        // Type coercion is when JavaScript automatically converts a value from one data type to another.

        // Type conversion
        // const inputYear = '1991';
        // console.log(Number(inputYear));
        // console.log(inputYear + 18); // will return 199118 as it is originally string
        // console.log(Number(inputYear) + 18);

        // console.log(Number('Jonas'));
        // console.log(typeof NaN); // Invalid number (output will be number)

        // console.log(String(23), 23);

        // Type coercion
        // console.log('I am ' + 23 + ' years old');
        // console.log('23' - '10' - 3); //10
        // console.log('23'-'10'+'3'); // 133 because of string concatination

    // End Briefing    

// End type conversion

// Truthy and falsy value

    // Briefing

        // In JavaScript, some values are considered falsy and others are considered truthy.
        // Falsy values are values that are considered false in a boolean context.
        // Truthy values are values that are considered true in a boolean context.
        // Falsy values: 0, '', null, undefined, NaN, false
        // Truthy values: '0', 1, [], {}, true, 'false'

        // console.log(Boolean(0)); // false
        // console.log(Boolean(undefined)); // false
        // console.log(Boolean('Shreya')); // true
        // console.log(Boolean({})); // true

        // const money = 0;
        // if (money) {
        //     console.log("Don't spend nit all");
        // }
        // else{
        //     console.log("You should get a job"); // else block is executed as 0 is a falsy value
        // }

        // let height;
        // if (height) {
        //     console.log('YAY! Height is defined.');
        // }
        // else{
        //     console.log('Height is undefined');
        // }

    // End Briefing

// End truthy and falsy value

// Equality operatiors

    // Briefing

        // In JavaScript, there are two types of equality operators: '===' and '=='.
        // The '===' operator checks for both value and type equality.
        // The '==' operator checks for value equality, but it can also perform type coercion.

        // const age = '18';
        // if (age === 18) console.log('You just became an adult :D (strict)'); 
        // if (age == 18) console.log('You just became an adult :D (loose)');  

        // const favourite = Number(prompt("What is your favourite number?"));
        // console.log(favourite); // number is in string to convert to integer do type conversion

        // if (favourite === 23) {
        //     console.log('Cool! 23 is an amazing number');
        // }
        // else if (favourite === 7) {
        //     console.log('7 is also a cool number!');
        // }
        // else{
        //     console.log('Number is not 23 or 7');
        // }

    // End Briefing

    // Practice Problem

        // Declare a variable numNeighbours based on a prompt input like this:
        // prompt('How many neighbour countries does your contry have?');
        // If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now).
        // Use an else-if block to log 'More than 1 border' in case numNeighbours is greater than 1.
        // Use an else block to log 'No borders' (this block will be executed when numNeighbours is 0 or any other value).
        // Test the code with different values of numNeighbours, including 1 and 0.
        // Change == to ===, and test the code again, with the same values of numNeighbours. Notice what happens when there is exactly 1 border! 
        // Why is this happening?
        // Finally, convert numNeighbours to a number, and watch what happens now when you input 1.
        // Reflect on why we should use the === operator and type conversion in this situation.4

        // Answer
        // let numNeighbours = Number(prompt('How many neighbour countries does your contry have?'));
        // if (numNeighbours == 1) { // using this as number is in string, so == will do type coercion means '1' = 1.
        // or just type convert the prompt to number. as if prompt is string and we use === operatior it will execute else block as '1' is not equal to 1
        // if (numNeighbours === 1) {
        //     console.log('Only 1 border!')
        // }
        // else if (numNeighbours > 1) {
        //     console.log('More than 1 border')
        // }
        // else{
        //     console.log('No borders')
        // }

    // End Problem

// End equality operators

// Boolean Logic

    // Briefing

        // A and B, A or B, Not A, Not B

    // End Briefing

// End Boolean Logic

// Logical Operators

    // Briefing

        // const hasDriversLicense = true;
        // const hasGoodVision = true;

        // console.log(hasDriversLicense && hasGoodVision);
        // console.log(hasDriversLicense || hasGoodVision);
        // console.log(!hasDriversLicense);

        // // const shouldDrive = hasDriversLicense && hasGoodVision;
        // // if (shouldDrive) {
        // if (hasDriversLicense && hasGoodVision) {
        //     console.log('He is able to drive!');
        // }
        // else{
        //     console.log('Someone else should drive...');
        // }
        // const isTired = false;

        // console.log(hasDriversLicense && hasGoodVision && isTired);
        // console.log(hasDriversLicense || hasGoodVision || isTired);

        // if (hasDriversLicense && hasGoodVision && !isTired) {
        //     console.log('He is able to drive!');
        // }
        // else{
        //     console.log('Someone else should drive...');
        // }

    // End Briefing

    // Practice Problem

        // Comment out the previous code so the prompt doesn't get in the way.
        // Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks English, has less than 
        // 50 million people and is not an island.
        // Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts 
        // for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.
        // If yours is the right country, log a strings like this 'You should live in Portugal :)'. If not, log 'Portugal does not meet 
        // your criteria :('.
        // Probably your country does not meet all the criteria. So go back and temporarily change some variables in order to make the 
        // condition true (unless you live in Canada :D).

        // Answer
        // const country = 'Portugal'
        // const language = 'English';
        // const population = 49;
        // // const isIsland = true;
        // let isIsland;
        // // if (language === 'English' && population < 50 && isIsland == false) { 
        // if (language === 'English' && population < 50 && !isIsland) { //// as isIsland is undefined it is falsy value. so !isIsland is true always
        //     console.log(`You should live in ${country} :).`);
        // }
        // else{
        //     console.log(`${country} does not meet your criteria :(.`);
        // }

    // End problem

// End Logical Operators

// Coding Challenge 3

    // There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score 
    // wins a trophy!
    // Your tasks:
    // 1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to 
    // the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.
    // 2. Compare the team's average scores to determine the winner of the competition, and print to the console:
    // "Dolphins win the trophy" if Dolphins win, or
    // "Koalas win the trophy" if Koalas win, or
    // "Both win the trophy" if their average scores are equal.
    // TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.

    // Answer
    // const firstTimeDolphins = 96;
    // const secondimeDolphins = 108;
    // const thirdTimeDolphins = 89;
    // const scoreDolphins = (firstTimeDolphins+secondimeDolphins+thirdTimeDolphins)/3;
    
    // const firstTimeKoalas = 88;
    // const secondTimeKoalas = 91;
    // const thirdTimeKoalas = 110;
    // const scoreKoalas = (firstTimeKoalas+secondTimeKoalas+thirdTimeKoalas)/3;

    // if (scoreDolphins>scoreKoalas) {
    //     console.log("Dolphins win the trophy")
    // }
    // else if (scoreDolphins<scoreKoalas){
    //     console.log("Koalas win the trophy")
    // }
    // else{
    //     console.log("Both win the trophy")
    // }

// End challenge

// Switch Statement

    // Briefing

        // const day = 'wednesday';

        // switch (day) {
        //     case 'monday':
        //         console.log('Plan a course structure');
        //         console.log('Go to coding meetup');
        //         break;
        //     case 'tuesday':
        //         console.log('Prepare theory video');
        //         break;
        //     case 'wednesday':
        //     case 'thursday':
        //         console.log('Write code examples');
        //         break;
        //     case 'friday':
        //         console.log('Record video lectures');
        //         break;
        //     case 'saturday':
        //     case 'sunday':
        //         console.log('Enjoy the weekend');
        //         break;
        //     default:
        //         console.log('Not a valid day');
        //         break;
        // }

    // End Briefing

    // Practice problem

        // Use a switch statement to log the following string for the given language:
        // chinese or mandarin: 'MOST number of native speakers!';
        // spanish: '2nd place in number of native speakers';
        // english: '3rd place';
        // hindi: 'Number 4';
        // arabic: '5th most spoken language';
        // for all other simply log 'Great language too :D'.
        
        // // Answer
        // let language = prompt("Enter a language: ")
        // switch (language.toLowerCase()) {
        //     case 'chinese':
        //     case 'mandarin':
        //         console.log('Most number of native speakers!');    
        //         break;
        //     case 'spanish':
        //         console.log('2nd place in number of native speakers');
        //         break;
        //     case 'english':
        //         console.log('3rd place');
        //         break;
        //     case 'hindi':
        //         console.log('Number 4');
        //         break;
        //     case 'arabic':
        //         console.log('5th most spoken language');
        //         break;
        //     default:
        //         console.log('Great language to :D.')
        //         break;
        // }
    
    // End Problem

// End switch

// Statements and Expressions

    // Briefing

        // Expressions:-
        // Expressions are typically used in statements, but they can also be used on their own.
        // 3 + 4, 1991, true && false && !false

        // Statements:-
        // Statements are used to perform actions, such as assigning a value to a variable or
        //  n n printing output to console
        // a = 5; if else satement, etc.

    // End Briefing

// End Statements and expressions

// Conditional operator (Ternary operator) 

    // Breifing

        // const age = 17;
        // age >= 18 ? console.log('I like to eat chicken') : console.log("I like to eat chicken wings");
        // const eat = age >= 18 ? 'chicken' : 'chicken wings';
        // console.log(eat);
        // console.log(`I like to eat ${age >= 18 ? 'chicken' : 'chicken wings'}`);

    // End Briefing 

    // Practice problem

        // If your country's population is greater than 33 million, use the ternary operator to log a string like this to the console: "Portugal's 
        // population is above average". Otherwise, simply log "Portugal's population is below average". Notice how only one word change between 
        // these two sentences!
        // After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back 
        // to original.

        // Answer
        // const population = 130;
        // const average = population > 33 ? 'above average' : 'below average';
        // console.log(`Portugal's pouplation is ${population > 33 ? 'above average' : 'below average'}`);

    // End Problem

// End conditional operator

// Coding Challenge 4

    // Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% 
    // if the bill value is between 50 and 300. If the value is different, the tip is 20%.
    // Your tasks:
    // Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement 
    // (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).
    // Print a string to the console containing the bill value, the tip, and the final value (bill + tip).
    // Example: The bill was 275, the tip was 41.25, and the total value 316.25.
    // Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂
    // TEST DATA: Test with different bill values: 275, 40, and 430

    // Answer
    // const bill = 275;
    // const tip = bill >= 50 && bill <= 300 ? bill * 0.15 :
    // bill * 0.20;
    // console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`);

// End challenge

