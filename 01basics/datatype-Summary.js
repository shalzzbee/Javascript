//datatypes---1. PRIMITIVE  2. non-primitive

//1. Primitive
//             7 types->
//string , number, boolean, null, undefined, BigInt, Symbol 

//dynamically typed langauge

const score = 33;  //number
const scoeval = 34.6;  //float
let isLoggedin = true;  //boolean
let outsideTemp = null;  //null 
let useremail;  //undefined

const id = Symbol('123');  //symbol
const anotherid = Symbol('123');
console.log(id);
console.log(id === anotherid);  //false

const bigNum = 452697412587468741236478n;  //BIGINT


//2. Reference --(non-primitive)

//Array, Objects, Functions

const hero = ["shaktiman", "naagraj", "doga"]; //array



let myObject = {  //object
    name: "Shalini",
    age: 20,
}


//functions
const myFun = function () {
    console.log("hello world");
};


console.log(typeof score);
console.log(typeof scoeval);
console.log(typeof isLoggedin);
console.log(typeof useremail);
console.log(typeof id);
console.log(typeof bigNum);
console.log(typeof outsideTemp);

console.log("NON-PRIMITIVE");
console.log(typeof hero);  //array-object
console.log(typeof myObject); //object
console.log(typeof myFun); //function


//+++++++++++++++++++++++++++++ MEMORY +++++++++++++++++++++++++++
console.log("---MEMORY---");

// stack--->PRIMITIVE ---> COPY ME CHANGES
// heap---NON-PRIMITVE (reference) --->ORIGINAL ME CHANGES

console.log("---primitive---");


let myname = "shalini budholiya";
let anotherName = myname;
anotherName = "shalu";  //copy me changes so that original remins same

console.log(myname);
console.log(anotherName);



//NON-PRIMITIVE
console.log("---non-primitive---");


let user1 = {
    email: "user1@gmail.com",
    upi: "user1@ybl",
}

let user2 = user1  //refernce to original value of user1


user2.email = "shalini@gmail.com";

console.log(user1.email);//same refernce value changed
console.log(user2.email);//same --shalini@gmail.com
