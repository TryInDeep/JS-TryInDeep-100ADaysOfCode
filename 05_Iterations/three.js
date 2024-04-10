// for of 

// ["","",""]
// [{},{},{}]


// const arr = [1 ,2 ,3 ,4 ,5]

// for (const num of arr) 
// {
//     console.log(num);
// }

// const greeting = "Hello World!"
// for (const string of greeting) 
// {
//     console.log(`Each char is ${string}`);  
// }


// Maps
// MAPS is for unique values key pair 

const map = new Map()
map.set('IN',"India")
map.set('US',"United of America")
map.set('FR',"France")
map.set('IN',"India")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
    
}

// IT WONT WORK LIKE THIS FOR OBJECT
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key,value] of myObject) {
//     console.log(key, ':-', value);
// }