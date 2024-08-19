const name = "shalini-sb";
const repocount = 5;

//normal mehtod to concatenate strings
//console.log(name + repocount + " value");

//string interpolation using ``
console.log(`Hello my name is ${name} and my repoCount is ${repocount}`);

//string declaration

const gameName = new String('Shalini-sb-com-pink');
console.log(gameName);
console.log(gameName[0]);   //accesing 0th key
console.log(gameName.__proto__);  //{} --> ek object mila h that seems to be empty but its not empty


console.log(gameName.length);
console.log(gameName.toUpperCase()); //no change in original value
console.log(gameName.charAt(2));  //char at which index 
console.log(gameName.indexOf('i'));  //4

//METHHODS OF STRINGS

const newstr = gameName.substring(0, 4); //start,end(exclusive)
console.log("substring ", newstr); //-ve values not allowed

const anotherstr = gameName.slice(0, 4); // -ve values  allowed
console.log("slice =>", anotherstr);

const new1 = "    Shalini     .";
console.log(new1);
//read on mdn--start and end
console.log(new1.trim());  //removes spaces


const url = "https://shalini.com/shalini%20budholiya";  //%20--> url coding-->white spaces ko automatically convert into url encoding
console.log(url);
console.log("replacing--");
console.log(url.replace('%20', '-'));


//if value is present or not
console.log(url.includes('shalini')); //true
console.log(url.includes('sona'));//false


//convert to array based on dash or spaces or anything

console.log(gameName.split('-'));  //separator

console.log("Read on strings on MDN");







