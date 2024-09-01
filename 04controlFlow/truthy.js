//final result assumed either right or wrong
//truthy or falsy

//const useremail = "s@gmail.com" //-true ---user email got
//empty string
//const useremail = ""  //-false ---user email not there
//empty array
const useremail = []  //-true ---user email got

if (useremail) {
    console.log("user email got");
} else {
    console.log("user email not there");
}


//falsy values--->
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values--->
// "0", 'false'(string ke andar hai), " ", [], {}, function(){},



// //example 1: empty array check

// if (useremail.length === 0) {
//     console.log("array is empty");
// }


//example2:  empty object check

const emptyobj = {};
if (Object.keys(emptyobj).length === 0) {
    console.log("Object is empty");
}


//general knowledge

// console.log(false == 0); //true
// console.log(false == '');//true
// console.log(0 == '');//true


//LOGICAL OPERATORS - &&, ||, !


//NULLISH COALESCING OPERATOR - (??)
//null and undefined

//use-- database se call krte time 2 response aate hain toh unn cases null and undefined
//safety check

let val1;
val1 = 5 ?? 10
console.log(val1); //5
val1 = null ?? 10 //null aane pr value 10 ho jaegi
console.log(val1); //10

val1 = undefined ?? 15
console.log(val1); //15

val1 = null ?? 10 ?? 15
console.log(val1); //10



// Ternary operator  -- condition ? true:false


const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more then 80");


