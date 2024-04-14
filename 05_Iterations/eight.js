// const array1 = [1,2,3,4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     initialValue
// );

// console.log(sumWithInitial);



const myNums = [1,2,3]
// const myTotal = myNums.reduce(function (acc,curval) {
//     console.log(`acc : ${acc} and curval : ${curval}`);
//     return acc + curval
// },3) // Initialvalue 


const myTotal = myNums.reduce((acc, curr) =>  acc + curr, 0 )

console.log(myTotal);


const shoppingCart = [
    {
        itemName:"JS Course",
        price: 2999
    },
    {
        itemName:"Java Course",
        price: 1999
    },
    {
        itemName:"C++ Course",
        price: 999
    },
    {
        itemName:"Python Course",
        price: 3999
    }

]

const priceToPay = shoppingCart.reduce((acc, item)=> acc + item.price, 0)

console.log(priceToPay);