
//{} = scope

//Global Scope
// var c =300
let a = 300
if(true)
{
    //block/ local scope
    let a = 10;
    const b = 20;
    // console.log("INNER : ",a);
    //  c = 30; 
}

// console.log(a);
// console.log(b);
// console.log(a);


// in website console and code environment scpopes are different 


function one() {
    const username = "Tridip"

    function two(){
        const website =  "Youtube"
        console.log(username);
    }
    // console.log(website);

    // two()
}

// one()

if(true)
{
    const useranme = "Tridip"
    if(useranme === "Tridip")
    {
        const website = " youtube"
        // console.log(useranme + website);
    }
    // console.log(website); error
}
// console.log(useranme); error


//++++++++++++++++++++++ Interesting ++++++++++++++++++++
//HOISTING JAVASCRIPT

//Basic Function
// console.log(addOne(5)); 
function addOne (num){
    return num + 1;

}
console.log(addOne(5)); 


// Expression or funnction 
//addTwo(5); = > you cant do like this 
const addTwo = function(num)
{
    return num + 2;
}
addTwo(5)