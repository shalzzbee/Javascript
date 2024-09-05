//for-of loop
//array specific loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // console.log(num);
}

const greeting = "hello world";
for (const greet of greeting) {
    // console.log(greet);
}


//maps-
//---> object holds key value pair and remembers the original insertion order of the keys
//---> unique values
const map = new Map;
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "france")
map.set('IN', "India")//not get printed as unique values

//console.log(map);

for (const i of map) {
    // console.log(i); //in form of array and togethwr
}

// if u want different key and value
for (const [key, value] of map) {
    console.log(key, ':-', value);
}



//object--not iterable
const myobj = {
    'game1': 'nfs',
    'game2': 'spiderman'
}

// for (const [key, value] of myobj) {
//     //console.log(key, ':-', value); //not iterable
// }




