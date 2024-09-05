// for objects we use for-in loop

const myobj = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myobj) {
    //console.log(myobj[key]);
    // console.log(`${key} shortcut is for ${myobj[key]}`);

}



//for in loop for arrays
const programming = ['js', 'rb', 'py', 'java', 'cpp'];

for (const key in programming) {
    // console.log(key); //ARRAY ki keys
     console.log(programming[key]);
}


//for in loop for maps ---not iterable

const map = new Map;
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "france")
map.set('IN', "India")


for (const key in map) {
     console.log(key);//nothing
}

