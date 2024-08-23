//arrays----object----collectionof diff items in one variable

//declaration
let myArr = [0, 1, 2, 3, 4];
//not necesarry same type elements
//myArr = [0, 1, 2, "shalini", true];

const myHeroes = ["shaktiman", "naagraj", "hanuman"];

const myarr2 = new Array(1, 2, 3, 4, 5);

//accessing elements
console.log(myArr[0]);


//shallow copies are made in arrays
//same reference ---change in original

//deep copies


//ARRAY METHODS
// --protoype has many mehtods


//PUSH AND POP

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
//console.log(myArr);

//UNSHIFT AND SHIFT  --at start
//time consuming--only for imp things
//myArr.unshift(6)
//myArr.shift()
//console.log(myArr);


//ques and ans
//console.log(myArr);
// console.log(myArr.includes(8));//boolean values in ans;
// console.log(myArr.indexOf(8));//-1 as doesnt exist

//JOIN--adds all the lement into a string separtor 
// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr); //string



// SLICE ---RETURNS A COPY OF A SECTION OF AN ARRAY

console.log("A", myArr);
const myn1 = myArr.slice(1, 3);//3-non inclusive
console.log(myn1);
console.log("B", myArr);  //original array remains same



const myn2 = myArr.splice(1, 3);//3-non inclusive
console.log("C", myArr);
console.log(myn2);///change in orginal array
