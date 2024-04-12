// For each loop

const coding = ["JS","Java","Python","CPP","Ruby"]

//1
// coding.forEach( function (item){
//     console.log(item);
// } )

//2
// coding.forEach((item) => {
//     console.log(item)
// })

//3
// function printMe(item)
// {
//     console.log(item);
// }

// coding.forEach(printMe)// reference

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
// })

// [{},{},{}]

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js",
    },
    {
        languageName: "Java",
        languageFileName: "java",
    },
    {
        languageName: "Python",
        languageFileName: "py",
    }
]

myCoding.forEach((item)=> {
    console.log(item.languageName);
})




//[[Prototype]]
// : 
// Array(0)
// at
// : 
// ƒ at()
// concat
// : 
// ƒ concat()
// constructor
// : 
// ƒ Array()
// copyWithin
// : 
// ƒ copyWithin()
// entries
// : 
// ƒ entries()
// every
// : 
// ƒ every()
// fill
// : 
// ƒ fill()
// filter
// : 
// ƒ filter()
// find
// : 
// ƒ find()
// findIndex
// : 
// ƒ findIndex()
// findLast
// : 
// ƒ findLast()
// findLastIndex
// : 
// ƒ findLastIndex()
// flat
// : 
// ƒ flat()
// flatMap
// : 
// ƒ flatMap()
// forEach
// : 
// ƒ forEach()
// includes
// : 
// ƒ includes()
// indexOf
// : 
// ƒ indexOf()
// join
// : 
// ƒ join()
// keys
// : 
// ƒ keys()
// lastIndexOf
// : 
// ƒ lastIndexOf()
// length
// : 
// 0
// map
// : 
// ƒ map()
// pop
// : 
// ƒ pop()
// push
// : 
// ƒ push()
// reduce
// : 
// ƒ reduce()
// reduceRight
// : 
// ƒ reduceRight()
// reverse
// : 
// ƒ reverse()
// shift
// : 
// ƒ shift()
// slice
// : 
// ƒ slice()
// some
// : 
// ƒ some()
// sort
// : 
// ƒ sort()
// splice
// : 
// ƒ splice()
// toLocaleString
// : 
// ƒ toLocaleString()
// toReversed
// : 
// ƒ toReversed()
// toSorted
// : 
// ƒ toSorted()
// toSpliced
// : 
// ƒ toSpliced()
// toString
// : 
// ƒ toString()
// unshift
// : 
// ƒ unshift()
// values
// : 
// ƒ values()
// with
// : 
// ƒ with()
// Symbol(Symbol.iterator)
// : 
// ƒ values()