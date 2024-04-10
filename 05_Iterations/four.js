const myObject = {
    js:'JavaScript',
    cpp:'C++',
    rb:'Ruby',
    swift:'SWift by apple'
}

for (const key in myObject) {
  
        
    // console.log(`${key} for shortcut for ${myObject[key]} `);
}


const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {

  console.log(programming[key]);
  // it will print array key 
}

// const map = new Map()
// map.set('IN',"India")
// map.set('US',"United of America")
// map.set('FR',"France")
// map.set('IN',"India")


// for (const key in map) {
//     console.log(key);
// }