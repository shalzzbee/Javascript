//full code should run on conditional basis/ control or logc flow


//if

//if (condition) { }
//if(true)--execute if(2==2){}
//if(false)---not get execute

// const isUserLoggedIn = true;
// if (isUserLoggedIn) {
//     console.log("executed");
// }


//comparision operator---- < , > , <=,  >=,  === checks type too,  ==,  !=

if (2 === "2") {
    console.log("executed"); //will not get exected as datatype is also checked
}

// let temp = 45;
// if (temp < 50) {
//     console.log("temp less than 50");  //this runs
// }
// console.log("temp greater than 50");//this also runs



//if else - only one piece of code willl get executed


// let temp = 450;
// if (temp < 50) {
//     console.log("temp less than 50");
// }
// else {
//     console.log("temp greater than 50");
// }



// const score = 200
// if (score > 100) {
//     const power = "fly"
//     console.log(`user power: ${power}`);//execcutes
// }
// console.log(`user power: ${power}`); //scope error


//short hand notation
//implicit scope --one line
//const bal = 100;
// , laga ke multiple lines u can execute

// if (bal > 100) console.log("yes"),
//     console.log("out of acope");


//else if
// if (bal < 500) {
//     console.log("less");
// }
// else if (bal < 750) {
//     console.log("less thn 750");
// }
// else if (bal < 900) {
//     console.log("less thn 900");
// } else {
//     console.log("less thn 1200");
// }


//check multiple condition
const userLoggedIn = true;
const debitcard = true;
const fromGoogle = false;
const fromEmail = true;
//and --&&--all constion should be true
if (userLoggedIn && debitcard && 2 == 2) console.log("allow");

//or--||--only one condition should be true
if (fromGoogle || fromEmail) console.log("logged in");