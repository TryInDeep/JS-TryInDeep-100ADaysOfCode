
//============================ Conversion ================================/

let score = "Tridip"; // 33 , 33abc , null , true/false

// console.log(typeof score);
// console.log(typeof (score));

// Coverted => String to Number 
let valueInNumber = Number(score);

// console.log(typeof (valueInNumber));
// console.log(valueInNumber);

// NaN = Not a Number (NaN special type)


// "33" => 33
// "33abc" => Nan
// true => 1 ; false => 0
// null => 0


let isLoggedIn = "Tridip";

let booleanIsLoggedIn = Boolean(isLoggedIn);
//console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => 0
// "Tridip" => true



let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber)



//============================ Operations ===================================//

let value = 3;
let negvalue = -value;
// console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); // power 
// console.log(2/3);
// console.log(2%3);


let str1 = "Hello";
let str2 = " Tridip";
let str3 = str1 + str2;
//console.log(str3);

//Problems 

// console.log("1"+ 2);
// console.log(1+"2");
// console.log("1"+"2");
// console.log("1"+ 2 + 2);
// console.log(1+ 2 + "2");

//console.log(3 + 4 * 5 % 6); // bad habit use brackets 


// console.log(+true); // true+ error
// console.log(+"")


let num1, num2, num3;
num1 = num2 = num3 = 2+2;

let gameCounter = 100;
//gameCounter++; postfix
//++gameCounter; prefix
console.log(gameCounter)















