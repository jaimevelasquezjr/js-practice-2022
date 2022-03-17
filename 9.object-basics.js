/**
 * Title: Basics of Objects
 */

let name = 'Jaime';
let age = 28;
let hobby = 'Studying and Watching Tutorials';

let user = {
  name: 'Jaime',
  age: 40,
  hobby: 'Studying and Watching Tutorials',
};

console.log(user);
console.log(user.name); // display specific data using dot notation - option 1
console.log(user.age); // display specific data using dot notation - option 1

console.log(user['name']); // display specific data using square bracket notation
console.log(user['hobby']); // display specific data using square bracket notation
