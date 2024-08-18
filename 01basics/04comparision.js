// console.log(2 > 3);
// console.log(2 >= 3);
// console.log(2 < 3);
// console.log(2 <= 3);
// console.log(2 == 3);
// console.log(2 != 3);

//DATATYPE SHOULD BE SAME
// console.log("2" > 1);
// console.log("02" > 1);  //automatic datatype conversion

console.log("CONFUSION---");
console.log(null>0);
console.log(null==0);
console.log(null>=0);// TRUE --> value conversion problem -->null to 0
// REASON---> equality check == and comparision > , < , >=  , <= work differently
//comparisions convert NULL to a number treating it as 0
//thats why null>=0 is true and null>0 is false


console.log(undefined>0);
console.log(undefined==0);
console.log(undefined>=0);


//STRICT CHECK    === checks datatype as well
console.log("STRICLTY CHECK DATATYPE ===");
console.log("2"===2);
