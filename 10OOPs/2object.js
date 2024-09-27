//PROTOTYPE

//fucntion as a object 
function multiplyby5(num) {

    return num * 5;
}

//multiplyby5(5);

multiplyby5.power = 2; // ?--> . operator use krke access? is fucntion an object?

console.log(multiplyby5(5));//25
console.log(multiplyby5.power);//2
console.log(multiplyby5.prototype);//{}-- by default context set--with some properites---this keyword


//this keyword --prototype
function createUser(username, score) {
    //username=username;//confusion?
    this.username = username;
    this.score = score;
}

//method/function of our own in prototype
createUser.prototype.increement = function () {
    //  score++;//confusion? as no context? kis ko call kiya>

    this.score++;
}
//users of the function
// const chai = createUser("chai", 25);
// const tea = createUser("tea", 250);  


//NEW KEYWORD

const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);




//another method
createUser.prototype.printMe = function () {
    console.log(`price is : ${this.score}`);
}

chai.printMe();//error?  Cannot read properties of undefined (reading 'printMe')
//add 'new' keyword in the users




//++++++++++++++++++++++++++ NOTES +++++++++++++++++++++++++++++++



/*  FUNCTIONALITY OF NEW KEYWORD

Here's what happens behind the scenes when the new keyword is used:

'A new object is created': The new keyword initiates the creation of a new JavaScript object.

'A prototype is linked': The newly created object gets linked to the prototype property of the construcJJtor function. This means that it has access to properties and methods defined on the constructor's prototype.

'The constructor is called': The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

'The new object is returned': After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/