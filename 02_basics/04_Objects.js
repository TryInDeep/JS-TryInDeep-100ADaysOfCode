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

// console.log(regulatUser.fullName.userfullname.firstName);
// console.log(regulatUser.fullName?.userfullname.firstName);   *?

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
const obj4 = {5: "a", 6:"b"}



// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4) // {} => optional parameter (target, source)


const obj3 = {...obj1,...obj2}
// console.log(obj3);
///////////////////////////////////////////////////
const users = [
    {
        id:1,
        email: "T@gmail.com"
    },

    {
        id:1,
        email: "T@gmail.com"
    },
    {
        id:1,
        email: "T@gmail.com"
    },
    {
        id:1,
        email: "T@gmail.com"
    },
    
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //* */

// constructor
// : 
// ƒ Object()
// hasOwnProperty
// : 
// ƒ hasOwnProperty()
// isPrototypeOf
// : 
// ƒ isPrototypeOf()
// propertyIsEnumerable
// : 
// ƒ propertyIsEnumerable()
// toLocaleString
// : 
// ƒ toLocaleString()
// toString
// : 
// ƒ toString()
// valueOf
// : 
// ƒ valueOf()
// __defineGetter__
// : 
// ƒ __defineGetter__()
// __defineSetter__
// : 
// ƒ __defineSetter__()
// __lookupGetter__
// : 
// ƒ __lookupGetter__()
// __lookupSetter__
// : 
// ƒ __lookupSetter__()
// __proto__
// : 
// (...)
// get __proto__
// : 
// ƒ __proto__()
// set __proto__
// : 
// ƒ __proto__()


// De Structure and JSON API 

const course = {
    courseName:"Js In Hindi ",
    price:"999",
    courseInstructor: "Tridip"
}

// course.courseInstructor  
//DeSTructuring 
const {courseInstructor: instructor } = course // this for shortcut 
console.log(instructor);

//props
// const navbar = ({company}) => {

// }

// navbar(company = "Triip")


//Json Value   ignor the error 
// {
//     "name": "Tridip",
//     "courseName":"Js iN Hindi",
//     "price": "Free"
// }

[
    {},
    {},
    {}
]

// https://randomuser.me/api/