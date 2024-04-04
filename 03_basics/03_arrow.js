const user = {
    username: "Tridip",
    price: 999,

    welcomeMassage: function() {
        console.log(   `${this.username}, welcome to website `);
        console.log(this);
    }
}

// user.welcomeMassage()
// user.username = "Aankhi"
// user.welcomeMassage()
// this key word means => current concept // constext means values

// console.log(this);
// in website console iit will give some function but in enviroment it will be empty {}
// in browser  most global object window object **



// function chai()
// {
//     // we can't use (this) in a function
//     let username = "Tridip"
//     console.log(this.username);
// }
// chai();

// const chai = function () {
//         let username = "Tridip"
//         console.log(this.username);

// }

//Arrow function in JavaScript 
const chai =  () => {
        let username = "Tridip"
        console.log(this);

}
// chai()


// () => {} basic syntax
// const addTwo = (num1 ,num2) => {
//     return num1 + num2;
// }

// Implicit Result 
// const addTwo = (num1 ,num2) => num1 + num2;
// const addTwo = (num1 ,num2) => (num1 + num2);


// Ecplicit Result 
// const addTwo = (num1 ,num2) => {username:"Tridip"}; // we cant return a object like this 
const addTwo = (num1 ,num2) => ({username:"Tridip"}); // we need to wrap in perenthesis


console.log(addTwo(2,4)); 


const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(()=>{})