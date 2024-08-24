const marvel = ["thor", "ironman", "spiderman"];
const dc = ["superman", "flash", "batman"];

//merge arrays

//1st method using push

//marvel.push(dc); //it creates an array within an array
// console.log(marvel);
// console.log(marvel[3]);//considers the complete array as a element
// console.log(marvel[3][2]);//array inside value ko access



//2nd method using concat
const allheroes = marvel.concat(dc);
//console.log(allheroes);//conactenated both arrays


//3rd method using spread operator---  ... ek ek element same as conact but more widely used
const newheroes = [...marvel, ...dc]
//console.log(newheroes);


//multiple arrays within an array

//flat method--automatically spreads out the complete array as one
const arr2 = [1, 2, 3, [4, 5, 6], 7, [6, 7], [4, 5]];
const realarr2 = arr2.flat(Infinity);
// console.log(arr2)
// console.log(realarr2);


console.log(Array.isArray("shalini")); //false

//to convert string into array
console.log(Array.from("shalini"));

//to convert object into array --> {key:value} pairs
console.log(Array.from({ name: "shalini" }));  //  []--> empty array
//interesting case ---> specify  that key se array banaye ya vales se array banaye otherwise an empty array

//convert multiple variables into an array
let score1 = 200;
let score2 = 300;
let score3 = 400;
//.of returns a new array from set of elements
console.log(Array.of(score1, score2, score3)); //[ 200, 300, 400 ]
