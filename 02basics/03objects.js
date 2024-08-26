//singleton=-- when objects are declared as constructor 
//singleton--apni tarah ka ek hi object

//Object.create

//Declaration of objects---1. object literals   2. constructor



//OBJECT LITERALS:-  { key:value }

const mySym = Symbol("key1");

const user = {
    name: "Shalini",  //name here is a string but valye can be anything boolean etc
    "full name": "Shalini Budholiya",
    age: 20,
    [mySym]: "key1",
    location: "Gwalior",
    email: "shalini@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "sunday"]

}

//accessing objects ---  . and []

console.log(user.email);
//console.log(user[email]);//error as email is string so in double quotes
console.log(user["email"]);

//console.log(user.full name);  //not accessible via dot
console.log(user["full name"]); //ony by brackets


//Symbols datatype

//console.log(user.mySym);  //key1 but datatype is not symbol
//console.log(typeof user.mySym);  //shows its a string not symbol
//use symbol as [] and access also through []

console.log(user[mySym]);


//change values in objects

user.email = "shalu@gbp.com"; //overrigth

//if u dont want your valus to get changes then use freeze

//Object.freeze(user)
user.email = "shalu@gchatgpt.com";  //doesnt propogate
console.log(user);


//adding functions in objects---type1 citizen no dicrimination from variables

user.greeting = function () {
    console.log("hello js user");
}


user.greeting2 = function () {
    console.log(`Hello user, ${this.name}`);
}

//console.log(user.greeting)// function ([anonymous])---fucntion is not executed just a refernece of function
//console.log(user.greeting());//error as greeting is not a function as objects was freezed 


console.log(user.greeting());
console.log(user.greeting2());//accesing within objs



