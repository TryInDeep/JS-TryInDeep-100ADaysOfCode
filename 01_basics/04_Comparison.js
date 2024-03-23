// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 >= 1);
// console.log(2 == 1);
// console.log(2 != 1);


console.log("2" > 1); // JavaScript Automatically Converted "2" to a number
console.log("02" > 1);


console.log(null > 0);
console.log(null < 0);
console.log(null == 0);
console.log(null >= 0);
console.log(null <= 0);
//The reason is that an equality check == and comparisons > < >= <= work diffrently 
//comparisons convert null to a number, treating it as 0.
//That's why null >= 0 is true and null > 0 is false 

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

//Strict Check (===) checks the value strctly and also check the data type
 
console.log("2"==2); // true 
console.log("2"===2); // false

