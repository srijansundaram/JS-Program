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

// Arrays

    // Briefing

        // const friends = ['Chintu', 'Dogesh', 'Gajodhar'];
        // console.log(friends);

        // const years = new Array(1991, 1984, 2008, 2020);

        // console.log(friends[0]);
        // console.log(friends[1]);

        // console.log(friends.length);
        // console.log(friends[friends.length - 1]);

        // friends[2] = 'Bhanupratap';
        // console.log(friends);

        // const Chintu = ['Chintu', 'Tyagi', 2037-1998, 'Badmoshi', friends];
        // console.log(Chintu);

        // const calcAge = function(birthYear){
        //     return 2037 - birthYear;
        // }
        // const years = [1990, 1967, 2002, 2010, 2018];

        // // console.log(calcAge(years)); // not gonna work
        // const age1 = calcAge(years[0]);
        // const age2 = calcAge(years[1]);
        // const age3 = calcAge(years[years.length - 1]);

        // console.log(age1, age2, age3);

        // const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
        // console.log(ages);

    // End Briefing

    // Practice problem

        // Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using 
        //previously. Store this array into a variable called populations.

        // Log to the console whether the array has 4 elements or not (true or false).
        
        // Create an array called percentages containing the percentages of the world population for these 4 population values. Use the 
        // function percentageOfWorld1 that you created earlier to compute the 4 percentage values.

        // Answer
        // const percentage = function(populations){
        //     return (populations / 7900) * 100;
        // }

        // const populations = [1441, 1220, 18, 95];
        // console.log(populations.length === 4);

        // const percentages = [percentage(populations[0]), percentage(populations[1]), percentage(populations[2]), percentage(populations[3])];
        // console.log(percentages);

    // End Problem

// End Arrays

// Basic operations on arrays

    // Briefing

        // const friends = ['Chintu', 'Dogesh', 'Gajodhar'];

        // friends.push('Bhanupratap'); // add element in the end
        // friends.unshift('Bulla'); // add element in starting
        // friends.pop(); // remove last element
        // friends.shift(); // remove first element

        // console.log(friends);
        // console.log(friends.indexOf('Dogesh'));
        // console.log(friends.indexOf('Bulla')); // return -1 as it is not in array

        // console.log(friends.includes('Dogesh')) // return true if element is in array else false

    // End Briefing

    // Practice problem

        // Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 
        // 3 neighbours. Store the array into a variable called neighbours.

        // At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country, so add it to the end 
        // of the neighbours array.
        
        // Unfortunately, after some time the new country is dissolved, so remove it from the end of the array.
        
        // If the neighbours array does not include the country 'Germany', log to the console: 'Probably not a central european country :D'.
        
        // Change the name of one of your neighbouring countries. To do that, find the index of the country in the neighbours array, and 
        // then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.


        // Answer
        // const neighbours = ['Nepal', 'Bhutan', 'Bangladesh'];
        // neighbours.push('Utopia');
        // neighbours.pop();
        // if (neighbours.includes('Germany')) {
        //     console.log('Probably a central european country :D');
        // }
        // else {
        //     console.log('Probably not a central european country :D');
        // }
        // neighbours[neighbours.indexOf('Nepal')] = 'Republic of Nepal';
        // console.log(neighbours);

    // End Problem

// End basic operations

// Coding challenge 2:

    // Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 
    // 300, and if the value is different, the tip is 20%.

    // Your tasks:

    // Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules 
    // above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. 
    // Test the function using a bill value of 100.

    // And now let's use arrays! So, create an array called bills containing the test data below.

    // Create an array called tips containing the tip value for each bill, calculated from the function you created before.

    // BONUS: Create an array totals containing the total values, so the bill + tip.

    // TEST DATA: 125, 555, and 44.

    // Answer
    // const calcTip = function(billValue){
    //     if (billValue >= 50 && billValue <= 300) {
    //         return billValue * 0.15;
    //     }
    //     else {
    //         return billValue * 0.20;
    //     }
    // }

    // const bills = [125, 555, 44];
    // const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
    // const totals = [(bills[0]+tips[0]), (bills[1]+tips[1]), (bills[2]+tips[2])];

    // console.log(bills);
    // console.log(tips);
    // console.log(totals);
    
// End challenge

// Introduction to objects

    // Briefing

        // const chintu = {
        //     name: "Chintu",
        //     age: 25,
        //     occupation: "Software Engineer",
        //     hobbies: ["Coding", "Reading", "Playing Guitar"],
        // };

        // console.log(chintu);

    // End Briefing

    // Practice problem

        // Create an object called myCountry for a country of your choice, containing properties country, capital, language, population 
        // and neighbours (an array like we used in previous assignments).

        // Answer
        // const myCountry = {
        //     country: 'India',
        //     capital: 'New Delhi',
        //     language: 'Hindi',
        //     population: '138Cr',
        //     neighbours: ['Nepal', 'Bhutan', 'Bangladesh'],
        // };
        // console.log(myCountry);

    // End problem

// End objects

// Dot VS. Bracket Notation

    // Briefing

        // const chintu = {
        //     firstName: "Chintu",
        //     age: 25,
        //     occupation: "Software Engineer",
        //     hobbies: ["Coding", "Reading", "Playing Guitar"],
        // };

        // console.log(chintu);
        // console.log(chintu.age); // dot
        // console.log(chintu['age']); // bracket

        // const nameKey = 'Name';
        // console.log(chintu['first' + nameKey]); // return chintu. we can't do this in dot

        // const interestedIn = prompt('What do you want to know about chintu? Choose between firstName, age, occupation, hobbies');

        // console.log(chintu.interestedIn) // return undefinded as interestedIn is not a property of object Chintu
        // console.log(chintu[interestedIn]); // return value based on interestedIn
        
        // if (chintu[interestedIn]) {
        //     console.log(chintu[interestedIn]);
        // }
        // else {
        //     console.log('Sorry, we dont have that information');
        // }

        // chintu.location = 'Shaitan Gali';
        // chintu['twitter'] = '@badmoshchintu';
        // console.log(chintu);

    // End briefing

    // Practice Problem

        // Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 
        // 3 neighbouring countries and a capital called Helsinki'.

        // Increase the country's population by two million using dot notation, and then decrease it by two million using bracket notation.

        // Answer
        // const myCountry = {
        //     country: 'India',
        //     capital: 'New Delhi',
        //     language: 'Hindi',
        //     population: 138,
        //     neighbours: ['Nepal', 'Bhutan', 'Bangladesh'],
        // };
        // console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`)

        // myCountry.population += 2;
        // console.log(myCountry.population);

        // myCountry['population'] -= 2;
        // console.log(myCountry.population);

    // End problem

// End Dot VS. Bracket Notation

// Object Methods
 
    // Briefing

        // const chintu = {
        //     firstName: "Chintu",
        //     lastName: 'Tyagi',
        //     birthYear: 1991,
        //     job: "Software Engineer",
        //     hobbies: ["Coding", "Reading", "Playing Guitar"],
        //     hasDriversLicense: true,

            // calcAge: function(birthYear){ //1
            //     return 2024 - birthYear;
            // }

            
            // calcAge: function(){ //2
            //     console.log(this);
            //     return 2024 - this.birthYear;
            // },
                
            // calcAge: function(){ //3
            //     this.age = 2024 - this.birthYear;
            //     return this.age;
            // },

            // getSummary: function(){
            //     return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`;
            // }
        // };

        // console.log(chintu['calcAge'](1991)); //1
        // console.log(chintu.calcAge()); //2
        // chintu.calcAge(); //3
        // console.log(chintu.age); //3 // without calling calcAge before the age property doesn't exist so it return undefined
            
        // console.log(chintu.getSummary());

    // End Briefing

    // Practice Problem

        // Add a method called describe to the myCountry object. This method will log a string to the console, similar to the string 
        // logged in the previous assignment, but this time using the 'this' keyword.

        // Call the describe method.
        
        // Add a method called checkIsland to the myCountry object. This method will set a new property on the object, called isIsland. 
        // isIsland will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.

        // Answer
        // const myCountry = {
        //     country: 'India',
        //     capital: 'New Delhi',
        //     language: 'Hindi',
        //     population: 138,
        //     neighbours: ['Nepal', 'Bhutan', 'Bangladesh'],

        //     describe: function(){
        //         console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`)
        //     },

        //     checkIsland: function(){
        //         this.isIsland = this.neighbours.length === 0 ? true : false;
        //     },
        // };

        // myCountry.describe();
        // myCountry.checkIsland();
        // console.log(myCountry.isIsland); // false

    // End problem

// End object methods

// Coding challenge 3

    // Let's go back to Mark and John comparing their BMIs!

    // This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

    // Your tasks:

    // For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). 
    // Name these objects as mark and john, and their properties exactly as fullName, mass and height.

    // Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property 
    // called bmi (lowercase), and also return it from the method.

    // Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is 
    // higher than Mark Miller's (23.9)!".

    // TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

    // Answer:
    // const mark = {
    //     fullName: 'Mark Miller',
    //     mass: 78,
    //     height: 1.69,

    //     calcBMI: function(){
    //         this.bmi = this.mass / (this.height ** 2);
    //         return this.bmi;
    //     },
    // };
    // const john = {
    //     fullName: 'John Smith',
    //     mass: 92,
    //     height: 1.95,
    
    //     calcBMI: function(){
    //         this.bmi = this.mass / (this.height ** 2);
    //         return this.bmi;
    //     },
    // }

    // mark.calcBMI();
    // john.calcBMI();

    // if (mark.bmi > john.bmi) {
    //     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);
    // }
    // else if (john.bmi > mark.bmi) {
    //     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`);
    // }

// End challenge

// For loop

    // Briefing

        // for loop keeps running while condition is true
        // it can be used to iterate over arrays, objects, strings, etc.
        
        // for(let rep = 1; rep <= 10; rep++){
        //     console.log(`Hello, I am a loop!`);
        // }
        
    // End briefing
        
    // Practice Problem
        
        // There are elections in your country! in a small town, there are only 50 voters. Use a for loop to simulate the 50 people voting, 
        // by logging a string like this to the console (for numbers 1 to 50): 'Voter number 1 is currently voting'.
        
        // Answer:
        // for(let rep = 1; rep <= 50; rep++){
        //     console.log(`Voter number ${rep} is currently voting.`);
        // }

    // End problem

// End for loop    

// Looping arrays, breaking and continuing

    // Briefing

        // Looping arrays
        // const chintu = [
        //     "Chintu",
        //     'Tyagi',
        //     2024-1969,
        //     'Badmosh',
        //     ['Dogesh', 'Bulla', 'Bhanupratap']
        // ];
        // const types = [];

        // for (let i = 0; i < chintu.length; i++) {
        //     // const element = chintuArray[i];
        //     // console.log(element);
        //     // console.log(element, typeof(element));

        //     console.log(chintu[i], typeof chintu[i]);
        //     // types[i] = typeof chintu[i];
        //     types.push(typeof chintu[i])
        // }

        // console.log(types);

        // const years = [1991, 2007, 1969, 2020];
        // const ages = []

        // for(let i = 0; i <  years.length; i++){
        //     ages.push(2024 - years[i]);
        // }
        // console.log(ages);

        // continue and break
        // console.log('--- ONLY STRINGS ---');
        // for (let i = 0; i < chintu.length; i++) {
        //     if (typeof chintu[i] !== 'string') continue;
                    
        //     console.log(chintu[i], typeof chintu[i]);
        // }
    
        // console.log('--- BREAK WITH NUMBER ---');
        // for (let i = 0; i < chintu.length; i++) {
        //     if (typeof chintu[i] === 'number') break;
                    
        //     console.log(chintu[i], typeof chintu[i]);
        // }

    // End briefing

    // Practice problem

        // Let's bring back the populations array from a previous assignment.

        // Use a for loop to compute an array called percentages2 containing the percentages of the world population for the 4 population values. 
        // Use the function percentageWOrld1 that you created earlier.
        
        // Confirm that percentages2 contains exactly the same values as the percentages array that we created manually in the previous assignment, 
        // and reflect on how much better this solution is.

        // Answer:
        // const populations = [1441, 1220, 18, 95];
        // const percentages2 = [];
        // for (let i = 0; i< populations.length; i++) {
        //     percentages2.push ((populations[i] / 7900) * 100);
           
        // }
        // console.log(percentages2);
    // End problem

// End looping arrays

// Looping backwards and loops in loops

    // Breifing

        // Looping bakcwards
        // const chintu = [
        //     "Chintu",
        //     'Tyagi',
        //     2024-1969,
        //     'Badmosh',
        //     ['Dogesh', 'Bulla', 'Bhanupratap']
        // ];

        // for(let i = chintu.length-1; i>=0; i--){
        //     console.log(i, chintu[i]);
        // }

        // Loop inside loop
        // for(let exercise = 1; exercise <= 3; exercise++){
        //     console.log(`------- Starting Exercise ${exercise}`);

        //     for (let rep = 1; rep < 6; rep++){
        //         console.log(`Exrecise ${exercise}: Lifting weight repetition ${rep} 🤸`);
        //     }
        // }

    // End briefing

    // Practice problem

        // Store this array of arrays into a variable called listOfNeighbours:

        // [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
        // Log only the neighbouring countries to the console, one by one, not the entire arrays. Log a string like 'Neighbour: Canada' 
        // for each country.
        
        // You will need a loop inside a loop for this. This is actually a bit tricky, so don't worry if it's too difficult for you! 
        // But you can still try to figure this out anyway 😉
        
        // Answer
        // const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
        // for (let i = 0; i < listOfNeighbours.length; i++) {
        //     for(let j = 0; j < listOfNeighbours[i].length; j++){
        //         console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
        //     }
        // }

    // End problem

// End looping backwards

// While loop

    // Briefing

        // let rep = 1;
        // while (rep <= 10){
        //     console.log(`Lifting weight repetition ${rep} 🤸`);
        //     rep++;
        // }

        // let dice = Math.trunc(Math.random() * 6) + 1;

        // while (dice !== 6) {
        //     console.log(`You rolled a ${dice}`);
        //     dice = Math.trunc(Math.random() * 6) + 1;
        //     if (dice === 6) console.log('Loop is about to end...');
        // }

    // End briefing

    // Practice problem

        // Recreate the challenge from the lecture Looping Arrays, Breaking and Continuing, but this time using a while loop 
        // (call the array percentages3).

        // Reflect on what solution you like better for this task: the for loop or the while loop?
    
        // Answer:
        // const populations = [1441, 1220, 18, 95];
        // const percentages3 = [];
        // let i = 0;
        // while (i < populations.length) {
        //     percentages3.push((populations[i] / 7900) * 100);
        //     i++;
        // }
        // console.log(percentages3);

    // End problem

// End while loop

// Challenge 4

    // Let's improve Steven's tip calculator even more, this time using loops!

    // Your tasks:

    // Create an array called bills containing all 10 test bill values.

    // Create empty arrays for the tips and the totals (tips and totals)

    // Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in 
    // the bills array. Use a for loop to perform the 10 calculations!

    // TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.

    // Answer:
    // const calcTip = function(billValue){
    //     if (billValue >= 50 && billValue <= 300) {
    //         return billValue * 0.15;
    //     }
    //     else {
    //         return billValue * 0.20;
    //     }
    // }
    // const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
    // const tips = [];
    // const totals = [];
    // for (let i = 0; i < bills.length; i++){
    //     const tip = calcTip(bills[i]);
    //     tips.push(tip);
    //     totals.push(bills[i] + tip);
    // }
    // console.log(bills);
    // console.log(tips);
    // console.log(totals);

// End challenge