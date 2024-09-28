// Activating Strict Mode

    // Briefing

        // strict mode makes it easier for us developers to avoid accidental errors.
        // first strict mode prohibts us to do certain thing
        // second strict mode makes it easier for us to catch errors before they happen.
        // third strict mode makes it easier for us to debug our code.

        'use strict';

        // let hasDriversLicense = false;
        // const passTest = true;    
        
        // if (passTest) hasDriverLicense = true; // show us the error in console
        // if (passTest) hasDriversLicense = true;
        // if (hasDriversLicense) console.log('I can drive :D');

        // const interface = 'Audio'; // show strict mode reserved word in console
        // const private = 534; // same as above in console

    // End Briefing

// End Activating Strict mode

// Functions

    // Briefing

        // A function is simply a piece of code that we can reuse over and over in our code
        // we can pass arguments to a function and get a return value from a function
        // we can also use functions to make our code more modular and easier to read.

        // function logger() {
        //     console.log('My name is Chintu');
        // }

        // calling / running / invoking function
        // logger();
        
        // function fruitProcessor(apples,  oranges) {
        //     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
        //     return  juice;
        // }

        // const drink = fruitProcessor(5, 0);
        // console.log(drink);

    // End Briefing 

    // Practice problem

        // Write a function called describeCountry which takes three parameters: country, population and capitalCity. Based on this input, 
        // the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'.
        // Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, 
        // and log them to the console.

        // Answer
        // function describeCountry(country, population, capitalCity) {
        //     const description = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
        //     return description;
        // }

        // const details = describeCountry('Finland', 6, 'Helsinki');
        // const details1 = describeCountry('India', 30, 'New Delhi');
        // const details2 = describeCountry('Nepal', 12, 'Kathmandu');
        // console.log(details);
        // console.log(details1);
        // console.log(details2);

    // End problem

// End Functions

// Function declarations vs expressions:

    // Briefing 
        
        // Function declarations are typically used when we need to define a function that can be called directly.
        
        // const age1 = calcAge1(2003); // does not give error
        
        // function calcAge1(birthYear) {
            // const age = 2037 - birthYear;
            // return 2037 - birthYear; 
        // }
        
        // console.log(age1, calcAge1(2004));
        // console.log(calcAge1(2004));
        
        // Function expressions are assigned to a variable, while function declarations are not.
        // Function expressions are typically used when we need to pass a function as an argument to another function,
        // or when we need to return a function from another function.

        // const calcAge2 = function (birthYear){
            // return 2037 - birthYear;
        // }

        // console.log(calcAge2(2005));

        // End briefing

        // Practice Problem

            // The world population is 7900 million people. Create a function declaration called percentageOfWorld1 which receives a population 
            // value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million 
            // people, so it's about 18.2% of the world population.
            // To calculate the percentage, divide the given population value by 7900 and then multiply by 100.
            // Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables, and log them to the console.
            // Create a function expression which does the exact same thing, called percentageOfWolrd2, and also call it with 3 country populations
            // (can be the same populations).
            
            // Answer:
            // function percentageOfWorld1(population) {
            //     return (population / 7900) * 100;
            // }   
            // const data1 = percentageOfWorld1(1441);
            // const data2 = percentageOfWorld1(1281);
            // const data3 = percentageOfWorld1(1100);

            // console.log(data1, data2, data3);
            
            // const percentageOfWolrd2 = function (population){
            //     return (population / 7900) * 100;
            // }
            // const data4 = percentageOfWolrd2(1285);
            // const data5 = percentageOfWolrd2(1985);
            // const data6 = percentageOfWolrd2(1530);

            // console.log(data4, data5, data6);

        // End problem

// End function declaration

// Arrow function

    // Briefing

        // Arrow functions are a shorthand way to write function expressions. They are often used when we need to
        // pass a function as an argument to another function, or when we need to return a function from
        // another function.

        // const calcAge3 = birthYear => 2037 - birthYear;
        // const age3 = calcAge3(2006);
        // console.log(age3);

        // const yearsUntilRetirement = (birthYear, firstName) => {
        //     const age = 2037 - birthYear;
        //     const retirement = 65 - age;
        //     // return retirement;
        //     return `${firstName} retires in ${retirement} years`;
        // }

        // console.log(yearsUntilRetirement(1991, 'Chintu'));

    // End briefing

    // Practice Problem

        // Recreate the last assignment, but this time create an arrow function called percentageOfWorld3.

        // Answer
        // const percentageOfWorld3 = population => (population / 7900) * 100;
        // const data7 = percentageOfWorld3(1285);
        // console.log(data7);

    // End Problem

// End Arrow function

// Function calling other function

    // Briefing

        // Functions can call other functions. This is called a nested function or a function within a function
 
        // function cutFruitPieces(fruit){
        //     return fruit * 4; 
        // }

        // function fruitProcessor(apples,  oranges) {
        //     const applePieces = cutFruitPieces(apples);
        //     const orangePieces = cutFruitPieces(oranges);

        //     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
        //     return  juice;
        // }
        // console.log(fruitProcessor(2,3));

    // End briefing

    // Practice Problem

        // Create a function called describePopulation. Use the function type you like the most. This function takes in two arguments: country and population, 
        // and returns a strings like this: 'China has 1441 million people, which is about 18.2% of the world'.
        // To calculate the percentage, describePopulation calls the percentageOfWorld1 you created earlier.
        // Call describePopulation with data for 3 countries of your choice.

        // Answer
        // const percentageOfWorld1 = population => (population / 7900) * 100;
        // function describePopulation(country, population) {
        //     const percentage = percentageOfWorld1(population);
        //     return `${country} has ${population} million people, which is about ${percentage}% of the world.`;
        // }
        
        // console.log(describePopulation('China', 1441));

    // End problem

// End function calling other function

// Coding challenge 1

    // Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
    // Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
    // A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

    // Your tasks:
    // Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a 
    // single number (the average score).

    // Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them 
    // (you will need to call this function, and pass scores as arguments).

    // Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the 
    // winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) 
    // (use avgDolphins and avgKoalas instead of hard-coded values).

    // Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

    // Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

    // TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
    // TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.


    // Answer:
    // const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

    // const scoreDolphins = calcAverage(85, 54, 41);
    // const scoreKoalas = calcAverage(23, 34, 27);

    // const checkWinner = (avgDolphins, avgKoalas) => {
    //     if (avgDolphins >= 2 * avgKoalas) {
    //         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    //     }
    //     else if (avgKoalas >= 2 * avgDolphins) {
    //         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    //     }
    //     else{
    //         console.log('No team wins.');
    //     }
    // }  

    // checkWinner(scoreDolphins, scoreKoalas);

// End challenge