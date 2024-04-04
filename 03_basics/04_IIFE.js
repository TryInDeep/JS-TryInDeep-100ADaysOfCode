// Immediately Invoked Function Expression (IIFE)

(function chai(){
    //named IIFI
    console.log(`DB CONECTED`);
})(); //===> we need to give semi colon end the code

// **some problems created form the global pollution, for erase the global variable pollution we use IIFE


// (function defination)(execution call )

((name)  =>  {
    //simple IIFI
    console.log(`DB connected two ${name}`);
})("Tridip")

