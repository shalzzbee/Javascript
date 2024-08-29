//arrow function ===> ES6 in 2015

//this keyword--protoype inheritance---current context---object


//THIS KEYWORD

const user = {
    username: "Shalini",
    price: 500,
    welcomeMessage: function () {  //current context
        console.log(`Hello ${this.username}, welcome to our website`);
        console.log(this);  //poora object - current context--par sirf call krne pr hi neeche
    }
}

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();


//global object --- window object --but in windows so many other things will also get showed
//console.log(this); // {}---empty object


//'THIS' IN FUNCTIONS

// function chai() {
//     let username = "shalini"
//     // console.log(this); // so many values
//     console.log(this.username); //undefined
// }
// chai(); 




//ARROW FUNCTION

const chai = () => {
    let username = "shalini"
    console.log(this.username); //undefined
    console.log(this);//{}
}
chai();


//PURE ARROW FUNCTION

//basic
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


//explicit return --- return lagana pad raha hai --- above examples


//curly braces {} --- use return keyword
//() --simple braces me no need of return statement


//implicit return --- when only 1 line of code is there so no need to 'return'

//const addTwo = (num1, num2) => num1 + num2;

//const addTwo = (num1, num2) => (num1 + num2);


//if object has to be returned

// const addTwo = (num1, num2) => { username: "shalini" }; //undefined

const addTwo = (num1, num2) => ({ username: "shalini" }); //printed

console.log(addTwo(5, 6));

//use in arrays--for each loop and all

// const myarray = [2, 5, 6, 7, 9];

// myarray.forEach(function () { })

// myarray.forEach(() => { })
