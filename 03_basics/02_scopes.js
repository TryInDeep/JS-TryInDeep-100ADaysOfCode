
//{} = scope

//Global Scope
// var c =300
let a = 300
if(true)
{
    //block/ local scope
    let a = 10;
    const b = 20;
    console.log("INNER : ",a);
    //  c = 30; 
}

// console.log(a);
// console.log(b);
console.log(a);


// in website console and code environment scpopes are different 