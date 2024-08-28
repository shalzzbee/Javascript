//GLOBAL SCOPE

// let a = 10;
// const b = 20;
// var c = 30;


//BLOCK SCOPE - {}

// if (true) {          //    --->scope  not in case of objects
//     let a = 10;
//     const b = 20;
//     var c = 30;
// }

// //console.log(a);  //ERROR---not defined
// //console.log(b);   //ERROR --- B NOT DEFINED
// console.log(c);  //30-----PROBLEM


let a = 300;

if (true) {          //    --->scope  not in case of objects
    let a = 10;
    const b = 20;
    //console.log("Inside:", a);//10
}

//console.log("Outside:", a);  //300




//nested scope---call stack---closure---child function can access parent function

function one() {
    const username = 'shalini';

    function two() {
        const website = "youtube"
        //console.log(username);
    }
    //console.log(website); //error
    two();  //shalini
}
one();


//if else
if (true) {
    const username = "shalini";

    if (username === "shalini") {
        const website = " youtube";
        //console.log(username + website);
    }
    //console.log(website); //error

}
//console.log(username);//error



//+++++++++++++++++++ INTERESTING +++++++++++++++++++++

//function

console.log(addone(7));  //8  --- declaration se pehele hi call

function addone(num) {
    return num + 1;
}
//addone(7);


//expression--variable holding function--hoisting

//console.log(addTwo(7)); //error declaration se pehele call nahi ho skta in this case
const addTwo = function (num) {
    return num + 2;
}
console.log(addTwo(9));



//closure---DOM
//SCOPE LEVEL AND MINI HOSITING