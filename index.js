console.log("This is from a separate JS file");

// Dot notation: person.name
// Bracket notation: person['name']

// Objects have curly braces
let person = {
  name: 'Brian',
  age: 45,
  superpower: 'charm'
};

console.log('Person\'s name is: ' + person.name);

// Arrays are with square brackets

let selectedColors = ['red', 'blue', 'green', 'yellow', 'purple'];

console.log('Length of selectedColors = ' + selectedColors.length);

function greet(name){
  console.log('Hello ' + name);
}

greet('Brian');


// ternary operator: (t/f condition) ? (what if true) : (what if false)
// If customer has more than 100pts, type = gold, else: type = silver

let points = 90;

let type = points > 100 ? 'gold' : 'silver';

console.log(type);

// swap red and blue

let a = 'red';
let b = 'blue';

// need a third variable to store 'a' before you write over it, then write over 'b' with what is store in the new variable
let c = a;
a = b;
b = c;

// FOR loops
// for (initialExpression; conditionToReach; incrementExpression)

for (let i = 0; i < 5; i++) {
  console.log('Hellow world for the ' + i + ' time.');
}

for (let i = 0; i < 10; i++ ) {
  if (i % 2 !== 0) console.log(i);
}

// WHILE loops
// The loop variable must be declared externally.
// The condition is evaluated at the beginning

let i = 0;

while (i <= 5) {
  if (i % 2 !== 0) console.log(i); //business logic
  i++; //increment the counter
}

// DO WHILE loops
// Similar to while loops. Declare loop variable externally.
// Difference: DO WHILE loops always execute at least once, even if the condition is false
// Not used very much

let n = 0;

do {
  if (n % 2 !== 0) console.log(n); //business logic
  n++; //increment the counter
} while (n <= 5);

// Infinite loops
// Common cause: forgetting to increment the loop variable
// Another cause: while (true) where it is always TRUE
// Will crash the browser


// FOR IN loops
// Used to loop over the properties in an Object

for (let key in person) {
  console.log(key, person[key]);
}

const colors = ['red', 'green', 'blue'];

for (let index in colors)
  console.log(index, colors[index]);

// FOR-OF loops
// Ideal for iterating over arrays
// Don't have to find the index for each item and then access that index

for (let color of colors)
  console.log(color);


// BREAK and CONTINUE
// BREAK stops a loop
// CONTINUE returns to the beginning of the loop and begins the next iteration. Not used very often. Ugly.

var x = 0;
while (x <= 10) {
  if (x === 5) break;
  console.log(x);
  x++;
}


// Write a function that takes two numbers and returns the max of the rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl
// First wrote this with "if / else" logic, which isn't needed
function returnMax(a, b) {
  return (a > b) ? a : b;
}

let number = returnMax(7,3);
console.log(number + " is the larger number");


// returns true if width is greater than height
// Point of the lesson: you can take the value of an expression as is, you don't need to explicitly write code that indicates "return true" or "return false"
function isLandscape(width, height) {
  return (width > height);
}

let landscape = isLandscape(900, 1800);
console.log("Landscape test:" + landscape);

// FIZZBUZZ exercise
//Desired FizzBuzz logic:
// If number passed is divisible by 3 => Fizz
// if divisible by 5 => Buzz
// if divisible by both => FizzBuzz
// if divisible by neither => input
// if not passed a numner => NaN

function fizzBuzz(input) {
  if (typeof input !== 'number') return NaN;
  else if ((input % 3 === 0) && (input % 5 == 0)) return 'FizzBuzz';
  else if (input % 3 === 0) return 'Fizz';
  else if (input % 5 === 0) return 'Buzz';

  else return input;
 }

 const output = fizzBuzz(8);
 console.log(output);

 // Lessons:
 // Put the typeof check first to eliminate unnecessary checks
 // Put multiple conditions in parantheses to make them more readable
 // Make sure the stricter conditional test is checked first (or the function will break before getting to it)


// SPEED LIMIT EXERCISE
// Speed limit = 70 (mph)
// For every 5k above the limit, you get a point
// use Math.floor() to convert to the greatest integer
// If you get more than 12 points... your license is suspended


// Brian's implementation
function checkSpeed(speed) {
  if (speed <= 74) {
    return 'OK';
  } else {
    let overLimit = speed - 70;
    let points = Math.floor(overLimit / 5);

    if (points >= 12) {
      return 'Suspended';
    } else {
      return points;
    }
  }
}

console.log(checkSpeed(70)); // Expect: 'OK'
console.log(checkSpeed(73)); // Expect: 'OK'
console.log(checkSpeed(75)); // Expect: 1
console.log(checkSpeed(80)); // Expect: 2
console.log(checkSpeed(83)); // Expect: 2
console.log(checkSpeed(180)); // Expect: 'suspended'

/* Mosh's implementation

function checkSpeed(speed) {
  const speedLimit = 70;
  const milesPerPoint = 5;

  if (speed <= speedLimit + milesPerPoint) {
    console.log('OK');
    return; // This way computer doesn't need to evaluate any further code
    }

  const points = Math.floor((speed - speedLimit) / milesPerPoint);

  if (points >= 12)
    console.log('Suspended');
  else {
    console.log(points)
    }
  }
}

*/

// Lessons:
// Use constant variables to describe the numbers in your code (e.g. "speedLimit")
// Make sure you have all the test cases you need to test for
// THink about how to make as few indentations as possible. In this case we can break out of the entire logic if the first condition is met



// EVEN AND ODD NUMBERS exercise

showNumbers(10);

/* Brian's implementation

function  showNumbers(limit) {
  let i = 0;
  while (i <= limit) {
    if (i % 2 === 0) console.log(i, 'EVEN');
    else console.log(i, 'ODD');
    i++; //increment the counter
  }
}
*/

// Lessons:
// Could have used a FOR loop instead
// Could also have used a ternary operator for the cleanest conditionToReach

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
    console.log(i, message);
  }
}


// COUNT TRUTHY EXERCISE
// Write a function that returns how many 'truthy' values are in an array

const values = [0, true, 1, 3, false, "", NaN, undefined, "red", null];


function countTruthy(array) {
  let truthyItems = 0;
  for ( let item of array)
    if (item)
      truthyItems++;
  return truthyItems;
}

console.log("There are: " + countTruthy(values) + " truthy values");



// Show the properties of an object IF they are strings

const movie = {
  title: 'Gone With the Wind',
  releaseYear: 1954,
  rating: 4.9,
  director: 'Victor Fleming'
};


showProperties(movie);

function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'string')
      console.log(key, obj[key]);
  }
}


// SUM Exercise
// return the sum all the multiples of 3 and 5 up to a certain limit

console.log(sum(9));

function sum(limit) {
  let sum = 0;

  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0)
      sum += i;
  }
  return sum;
}


// Exercise: CALCULATE GRADE
// Calculates the average grade for a student

// 1-59 = F
// 60-69 = D
// 70-79 = C
// 80-89 = B
// 90-100 = A

const marks = [80, 90, 50, 78, 99, 83, 92];

console.log(calculatedGrade(marks));

function calculatedGrade(marks) {
  numOfGrades = 0;
  sumOfGrades = 0;

  for (let grade of marks) {
    numOfGrades++;
    // console.log("Number of grades: " + numOfGrades);
    sumOfGrades += grade;
    // console.log("Total of grades: " + sumOfGrades);
  }

  finalGrade = sumOfGrades / numOfGrades;

  if (finalGrade < 60) return 'F';
  else if (finalGrade < 70) return 'D';
  else if (finalGrade < 80) return 'C';
  else if (finalGrade < 90) return 'B';
  return 'A';
}

// Lessons:
// Use the simplest implementation (e.g. calculating the grade as a series of "is it lower than THIS?")
// Break this into two functions: one for averaging the grade, one for translating the average into a letter grade


// Exercise: Stars
// create a function that creates incremental rows with each row displaying a number of stars, up until the limit passed

function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    let pattern = '';
    for (let i = 0; i < row; i++)
      pattern += '*';
      console.log(pattern);
  }
}

showStars(9);


// Exercise: SHOW PRIMES

// How to determine a prime number:
// It can ONLY be divided by 1 and itself. So, it should always ONLY have a max of two factors
// Check EVERY number up to the number to see if modulus is 0

showPrimes(10);

function showPrimes(limit) {

  primes = [];

  for (let number = 2; number <= limit; number++) {

    let isPrime = true;

    for (let factor = 2; factor < number; factor++) {
      if (number % factor === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(number);
  }
  console.log(primes);
  console.log("There are " + (primes.length) + " prime numbers between 0 and " + limit);
}
