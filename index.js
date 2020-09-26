console.log("This is from a separate JS file");

let firstName = 'Brian';

// Objects have curly braces
let person = {
  name: 'Brian',
  age: 45,
  superpower: 'charm'
};

console.log('Person\'s name is: ' + person.name);

// Arrays are with square brackets

let selectedColors = ['red', 'blue', 'green', 'yellow', 'purple'];

console.log(selectedColors.length);

function greet(name){
  console.log('Hello ' + name);
}

greet('Brian');


// ternary operator: (t/f condition) ? (what if true) : (what if false)
// If customer has more than 100pts, type = gold, else: type = silver

let points = 90;

let type = points > 100 ? 'gold' : 'silver';

console.log(type);
