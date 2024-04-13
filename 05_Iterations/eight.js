// const array1 = [1,2,3,4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     initialValue
// );

// console.log(sumWithInitial);



const myNums = [1,2,3]
const myTotal = myNums.reduce(function (acc,curval) {
    console.log(`acc : ${acc} and curval : ${curval}`);
    return acc + curval
},3) // Initialvalue 

console.log(myTotal);
