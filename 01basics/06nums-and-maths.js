const score = 400;
console.log(score);

//explicitly defined 'Number'
const balance = new Number(100);
console.log(balance);


//string type
console.log(balance.toString());
//you can use string related properties
console.log(balance.toString().length);


// precision to 0s
console.log(balance.toFixed(3)); //100.000

const num = 1123.8966;
console.log(num);
console.log(num.toPrecision(4)); //1124

//place values
const hundreds = 100000;
console.log(hundreds.toLocaleString('en-IN'));  //separated by commas ---> crores lakhs etc


//max value min value
console.log("MAX,min VLAUE methods------");
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);





//++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++

console.log('++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++');

console.log(Math);  //object with so many properties

// console.log(Math.abs(-568));  // +ve value

// console.log(Math.round(4.3));//4
// console.log(Math.round(4.6));//5

// console.log(Math.ceil(4.3));//5
// console.log(Math.floor(4.3));//4

// console.log(Math.sqrt(4));//2

//min max
// console.log(Math.min(40, 59, 6, 7, 9, 10));


//most important 
console.log(Math.random());  //btw 0 and 1 
console.log(Math.floor(Math.random() * 10) + 1); //btw  1 and 9


const max = 20;
const min = 10;

//max-min = to get raNGE 
//+1 => to avoid 0 case
//+min => atleasT min toh aa hi jaaye
console.log(Math.floor(Math.random() * (max - min + 1)) + min);  //min 10 value



