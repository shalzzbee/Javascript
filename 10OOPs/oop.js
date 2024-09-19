//object literals--litrally only an object--base unit
//collection of properties and methods


// const user = {
//     username: "shalini",
//     login: 8,
//     signedIn: true,

//     getUserDetails: function () {
//         console.log("use deatils from db");

//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails());//undefined bhi print hua?



//this keyword---current context

const user = {
    username: "shalini",
    login: 8,
    signedIn: true,

    getUserDetails: function () {
        //console.log("use deatils from db");
        console.log(`Username:${this.username}`);
        console.log(this);//objects gets printed--curr context
    }
}

//console.log(user.username);
//console.log(user.getUserDetails());//if this keyword is not used then username is not defined

//global context
//console.log(this);//{} - empty object
//but in browser bahit saari cheez--window object and all



//CONSTRUCTOR FUNCTION--new keyword--ek hi object se multiple instances aap bana sako

// //new keyword
// const promiseOne = new Promise();
// const date = new Date();//to make new curr context



function User(username, login, isLoggedIn) {
    //username= username ; //error in differentiation
    this.username = username;
    this.login = login;
    this.isLoggedIn = isLoggedIn;

    //return this; //implicity defined already--no need to write it--by default
}

// const userone = User("shaluu", 12, true);
// //console.log(userone);
// const userTwo = User("chaiAurCode", 11, false);
// console.log(userone);// user two ki values will get printed as it is over written


//so this is a "issue"
//so use of new keyword--constructor function--nayi copy we get, no effect on original

// const userone = new User("shaluu", 12, true);
// console.log(userone);
// const userTwo = new User("chaiAurCode", 11, false);
// console.log(userTwo);//diff copy


// WORKING OF NEW KEYWORD-
//1. an empty new object is created called 'instance'
//2. constructor function is called due to 'new' keyword, passed onto
//3. this keyword ke andar saare codes aajaate hain
//4. and we get the result in fucntion


function User1(username, login, isLoggedIn) {
    //username= username ; //error in differentiation
    this.username = username;
    this.login = login;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function () {
        console.log(`welcome ${this.username}`);
    }
    //return this; //implicity defined already--no need to write it--by default
}

const userNew = new User1("shaluu", 12, true);
//console.log(userNew);//complete object gets printed
console.log(userNew.constructor); // [Function: User1]
//refernce khud hi ke baare me

//instance of js--mdn  read

