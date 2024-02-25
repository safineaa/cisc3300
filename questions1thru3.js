//q1.create variable via ternary operator
let score = 45;
let rating = score > 50 ? 'High' : 'Low';
console.log(rating); // Outputs: 'Low'

//q2.create object and loop through properties
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

for (let key in person) {
  console.log(person[key]); 
}

//q3.create array of numbers
const numbers = [1, 2, 3, 4];
const squaredNumbers = numbers.map(number => number * number);
console.log(squaredNumbers); 

