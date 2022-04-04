/**
 * Title: Exercise Fizz Buzz
 * Problem: Fizz Buzz
 * Take a number
 * if it is divisible by 3, Print Fizz
 * if it is divisible by 5, Print Buzz
 * if it is divisible by both 3 & 5 print FizzBuzz
 * otherwise, print nothing
 *
 */

let input = 15;
let num1 = input % 3 == 0 ? true : false;
let num2 = input % 5 == 0 ? true : false;
let output;

if (num1 && num2) {
  output = 'FizzBuzz';
} else if (num1) {
  output = 'Fizz';
} else if (num2) {
  output = 'Buzz';
} else {
  output = '';
}

console.log(output);

// if (num2 == 3 && num1 % num2 == 0) {
//   console.log('Fizz');
// } else if (num2 == 5 && num1 % num2 == 0) {
//   console.log('Buzz');
// } else if()
