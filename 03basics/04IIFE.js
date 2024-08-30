// immediately invoked function expressions (IIFE)-
//1.)function gets immediately executed ---
//2.)global scope variables pollution problem


//semicolon is important



function chai() {
    console.log(`DB CONNECTED`);
}
// chai();

//iife---()();----- (fucntion)()



//normal function
//named IIFE
(
    function chai() {
        console.log(`DB CONNECTED`);
    }
)();  //execution call


//arrow function --SIMPLE IIFE
(() => {
    console.log(`DB CONNECTED 2`);
})();


//PARAMeTER IIFE
//arrow function with parameter
((name) => {
    console.log(`DB CONNECTED 2 ${name}`);
})('shalini');





