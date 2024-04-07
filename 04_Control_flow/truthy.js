// const userEmail = "T@tridip.ai"
const userEmail = []
if(userEmail) // Truthy value 
{
    console.log("Got User Email");
}else{
    console.log("Don't have user email");
}

//Falsy Values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//Truthy Values 
// "0", 'false', " " (Space in Between), [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array Is EMpty");

// }


const emtyObj = {}

if(Object.keys(emtyObj).length === 0){
    console.log("Object is Empty");
}

// false == 0
// true
// false == ''
// true
// '' == 0 
// true
