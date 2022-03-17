/**
 * Practice name: Exercise Person Object
 * Description: Create person object, with these following details
 * - name (string)
 * - age (number)
 * - isMarried (boolean)
 * - homeAddress with longtitude and lattitude
 * - list of friends
 */

let person = {
  name: 'Jaime',
  age: 28,
  isMarried: false,

  homeAddress: {
    long: 44.55,
    latt: 33.44,
  },

  friends: ['Kazi', 'Stephen', 'Brad', 'Klay'],
};

console.log(person.name);
console.log(person.age);
console.log(person.age);
console.log(person.isMarried ? 'married' : 'not-married');
console.log(`longtitude: ${person.homeAddress.long}`);
console.log(`lattitude: ${person.homeAddress.latt}`);
console.log('Friends list: ');
//const friendsList = person.friends.map(Math.sqrt);
for ($i = 0; person.friends.length > $i; $i++) {
  console.log(person.friends[$i]);
}
