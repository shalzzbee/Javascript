//reduce-- shopping cart--user supplied 'reducer'---sum krne ke liye
//acc = acc + initial value
//currVal = elements in array/objects one by one

const mynums = [1, 2, 3];

//normal function

// const myTotal = mynums.reduce(function (acc, currVal) {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal
// }, 0)
//initial value get stores in accumulator

//console.log(myTotal);




//arrow fucntion

const myTotal = mynums.reduce((acc, curr) => acc + curr, 0)
console.log(myTotal);



const shoppingCart = [
    {
        item: "js course",
        price: 2999
    },
    {
        item: "mobile dev course",
        price: 999
    },
    {
        item: "python course",
        price: 5999
    },
    {
        item: "data science course",
        price: 1999
    },
]


//add all the prices in shoppingg cart
const total = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(total);

