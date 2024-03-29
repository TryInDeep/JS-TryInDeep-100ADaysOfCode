// constrator => singleton


// object literals != singleton


const mySym = Symbol("key1")
const Jsuser = {

    // key : value
    name: "Tridip",
    "full Name": "Tridip Pramanick",
    [mySym]: "mykey1", // if you want to use as Symbol you need use in []
    age: 18,
    location: "Jaipur",
    email: "Tridip@microsoft.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]


}; //{} => Object 


// console.log(Jsuser.email); 
// console.log(Jsuser["email"]); 
//console.log(Jsuser.full name); X
// console.log(Jsuser["full Name"]); 
// console.log(Jsuser[mySym]);
// console.log(typeof Jsuser.mySym);


Jsuser.email = "Tridip@Google.com";
// Object.freeze(Jsuser);  //to freeze a key 
Jsuser.email = "Tridip@microsoft.com";
// console.log(Jsuser.email)
// console.log(Jsuser);

Jsuser.greeting =  function (){
    console.log("Hello JS User");
}

Jsuser.greeting2 =  function (){
    console.log(`Hello Js user ${} `); // string intapolation
}
console.log(Jsuser.greeting);

