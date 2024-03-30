//const tinderUser = new Object(); same use of both

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "SamriMoja"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
const regulatUser = {
    email: "some@gmail.com",
    fullName: {
        userfullname:{
            firstName: "Tridip",
            lastName: "Pramanick"
        }
    }
}

console.log(regulatUser.fullName.userfullname.firstName);
// console.log(regulatUser.fullName?.userfullname.firstName);   *?

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}


// const obj3 = {obj1, obj2}
const obj3 = Object.assign({},obj1,obj2) // {} => optional parameter 
console.log(obj3);
