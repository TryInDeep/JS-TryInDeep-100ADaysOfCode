// for 

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element == 5)
//     {
//         console.log("5 is best number");
//     }
//     console.log(element);
    
// }


// for (let i = 0; i < 10; i++)
// {
//     console.log(`Outer loop ${i}`);
//     for (let j = 0; j < 10; j++)
//     {
//         // console.log(`Inner Loop ${j} and inner loop ${i}`);
//         console.log(i + " * "+j+" = "+ (i*j));
//     }
// }


// let myArr = ["Flash","Batman","Superman","Wonder Woman"]
// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];
//     console.log(element);
    
// }


// Break and Continue 


// for (let i = 1; i <= 20; i++) 
// {
//     if(i == 5)
//     {
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`Value of i is ${i}`);
// }

for (let i = 1; i <= 20; i++) 
{
    if(i == 5)
    {
        console.log(`Detected 5`);
        continue;
    }
    // it wont continue after detecting 5 
    console.log(`Value of i is ${i}`);
}





