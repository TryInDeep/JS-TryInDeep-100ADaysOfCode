//Primitive

// 7 type : String, number , boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');




const bigNumber = 222242432154512535231n; // BigInt

// So JavaScript is Dynamically Typed Language.



// Referemce (Non primitive)

// Arrays, Object, functions

const heros = ["shaktiman", "naaraj","doga" ] ;

let myObj = {
    name: "Tridip", // under bracket that is object 
    age: 22,
}

const myFunction =  function(){
    console.log("Hello World");
}


console.log(typeof scoreValue);
console.log(isLoggedIn);
console.log(outsideTemp);
console.log(null);
console.log(userEmail);
console.log(id === anotherId);
console.log(bigNumber);
console.log(typeof heros);
console.log(myObj);
console.log(typeof myFunction);




