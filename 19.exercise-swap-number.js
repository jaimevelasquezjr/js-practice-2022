/**
 * Title: Exercise Swap two number
 *
 */

let apple = 20;
let orange = 30;

apple = 30;
orange = 20;

console.log(`Apple: ${apple}`);
console.log(`Orange: ${orange}`);

const fruits = {
  apple: 20,
  orange: 30,
};

apple = fruits['orange'];
orange = fruits['apple'];

console.log(`Using object Apple: ${apple}`);
console.log(`Using object orange: ${orange}`);
