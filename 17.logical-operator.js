/**
 * Title: Logical Operator
 * 1. and (&&)
 * 2. or (||)
 * 3. not (!)
 *
 */

// Example of Logical AND
let hasPassport = true;
let hasVaccineCard = true;
console.log(hasPassport && hasVaccineCard); // Result: True

// Example of Logical OR
hasPassport = true;
hasVaccineCard = false;
console.log(hasPassport || hasVaccineCard); // Result: True

// Example of Logical NOT
hasPassport = true;
hasVaccineCard = false;
console.log(!hasPassport); // Result: True
console.log(!hasVaccineCard); // Result: False
