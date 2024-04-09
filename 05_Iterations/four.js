const myObject = {
    js:'JavaScript',
    cpp:'C++',
    rb:'Ruby',
    swift:'SWift by apple'
}

for (const key in myObject) {
  
        
    console.log(`${key} for shortcut for ${myObject[key]} `);
}