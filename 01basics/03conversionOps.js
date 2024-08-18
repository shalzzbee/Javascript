let score = 33;
console.log(typeof score);  //1st method
console.log(typeof (score)); //2nd mehtod

console.log("STRING->NUMBER");

let score1 = "33";
console.log(typeof score1);//string

let valueInNum = Number(score1); //CAPITAL N ---> //conversion of string in number
console.log(typeof valueInNum);  //type converted to Numv=ber
console.log(valueInNum);//33


console.log("Change in score");



score1 = "33abc";

valueInNum = Number(score1);
console.log(typeof valueInNum);  //type converted to Number
console.log(valueInNum);//NaN--->as string abc is not a number

console.log("NULL->NUMBER");


score1 = null;
valueInNum = Number(score1);
console.log(typeof valueInNum);  //type converted to Number
console.log(valueInNum); //0

console.log("UNDEFINED->NUMBER");

score1 = undefined;
valueInNum = Number(score1);
console.log(typeof valueInNum);  //type converted to Number
console.log(valueInNum);

console.log("BOOLEAN->NUMBER");

score1 = true;  //1
valueInNum = Number(score1);
console.log(typeof valueInNum);  //type converted to Number
console.log(valueInNum);

console.log("STRING->NUMBER");

score1 = "Shalini";
valueInNum = Number(score1);
console.log(typeof valueInNum);  //type converted to Number
console.log(valueInNum);



//CONVERSIONS

// "33" => 33  EASILY CONVERTED
// "33abc" => NaN  CANT GET CONVERTED
// true => 1 ; false => 0


console.log("conversion of number to boolean");

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);  //true

console.log("empty string to boolean");
isLoggedIn = "";
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);  //false

console.log("string to boolean");
isLoggedIn = "Shalini";
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);  //true


//1 => true ;  0 => false
//"" => false
//"shalini" => true


//CONVERSION TO STRING
console.log("num to str");

let somenum = 33;
let stringNum = String(somenum);
console.log(stringNum);
console.log(typeof stringNum);



//************************** OPERATIONS *************************//

console.log("************************** OPERATIONS *************************");


let value = 3;
let negVal = -value;
//console.log(negVal);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 / 2);
// console.log(2 ** 3);  //POWER
// console.log(5 % 2);  //REMAINDER


let str1 = "Shalini"
let str2 = " Budholiya"

let str3 = str1 + str2;
console.log(str3);

console.log("PROBELM---> read ecmascript (abstract ops) toPrimitive ");
console.log("1" + "2");  //12
console.log("1" + 2);  //12
console.log(1 + "2");  //12

console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32

console.log(3 + 4 * 5 % 3);  //5


//ITERATIVE CONVERSION
console.log(true);
console.log(+true);  //1
//console.log(true +); //error

console.log(+""); //0

//not good approach
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
console.log("prefix and postfix on MDN");  //101
let gameCounter = 100;
++gameCounter;
console.log(gameCounter);  //101
gameCounter++;
console.log(gameCounter);  //102



