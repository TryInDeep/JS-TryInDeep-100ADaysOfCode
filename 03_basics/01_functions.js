

function sayMyName(){
    console.log("T");
    console.log("R");
    console.log("I");
    console.log("D");
    console.log("I");
    console.log("P");

}

// sayMyName();

// function addTwoNumbers (number1, number2)
// {
//    console.log( number1 + number2);
// }
// function addTwoNumbers (number1, number2)
// {
//     let result = number1 + number2
//     console.log("Tridip");
//     return result;
//     // after returning a value, funtion will not exwcute next lines 
//     console.log();
// }
function addTwoNumbers (number1, number2)
{
    
   return number1 + number2;
}

// addTwoNumbers(3,4)
// addTwoNumbers(3,"4")
// addTwoNumbers(3,"a")

const result = addTwoNumbers(3,5)

// console.log("Result: ",result);

// function loginUserMassage (username)
// {
//     if(username === undefined)
//     {
//         console.log("Pleasse Enter Username");
//         return;
//     }
//     return`${username} just logged in `
// }
// function loginUserMassage (username)
// {
//     if(!username)
//     {
//         console.log("Pleasse Enter Username");
//         return;
//     }
//     return`${username} just logged in `
// }
function loginUserMassage (username = "Tridip")
{
    if(!username)
    {
        console.log("Pleasse Enter Username");
        return;
    }
    return`${username} just logged in `
}

// console.log(loginUserMassage("Aankhi"));
// console.log(loginUserMassage(""));
// console.log(loginUserMassage());

// ....something (rest operator,spread operator)
function calculateCardPrice (val1,val2, ...num1){
    return num1
}

// console.log(calculateCardPrice(200,400,500,2000)); 


const user = {
    name:"Tridip",
    Prices: 199
}

function handleObject(anyObject)
{
    console.log(`Username is ${anyObject.name} and price is ${anyObject.Price} `);
}
// handleObject(user);
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray)
{
    return getArray[1];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));