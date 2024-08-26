//singleton objects declaration using constructor

// const tinderUser = {}; //non-singleton object

const tinder = new Object(); //singleton object


console.log(tinder);  //an empty object will be printed
//console.log(tinderUser); //same

//adding key value
tinder.id = "123abc"
tinder.name = "Daisy"
tinder.isLoggedIn = false;

//console.log(tinder); 


//objects inside objects

const regularObj = {
    email: "sum@gmail.com",
    fullname: {
        usernameFullname: {
            firstname: "Shalini",
            lastname: "Budholiya"
        }
    }
}

//console.log(regularObj);

//to open nesting
//console.log(regularObj.fullname.usernameFullname.lastname);


//optional chaining--adding question mark---protection if fulname exist or not
//used in API
//console.log(regularObj.fullname?.usernameFullname.lastname);


//merge objects

const obj1 = {
    1: "a",
    2: "b",
}
const obj2 = { 3: "C", 4: "d" };
const obj3 = { 5: "c", 6: "d" };

//const obj4 = { obj1, obj2 }
//console.log(obj4);//object inside objevt but not merged


//another method---object assign(target, source)

// const obj4 = Object.assign(obj1, obj2);//obj1 me obj2 
// console.log(obj4);


//another syntax--if multiple objects are to be merged
//an extra empyt obj
// const obj4 = Object.assign({}, obj1, obj2, obj3);//guaranteed result
// console.log(obj4);//as here {}--target



//using spread operator--99% used

const obj4 = { ...obj1, ...obj2, ...obj3 }
console.log(obj4);


//another method used when values are from database
//database se values in form of ARRAY OF OBJECTS


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "h@gmail.com"
    }

]


//accesing is done through loop -- .map

console.log(users[1].email);
console.log(tinder);


//important
//datatype is array of keys and loop ke through access
console.log(Object.keys(tinder));
console.log(Object.values(tinder));
console.log(Object.entries(tinder));//array of key value


console.log(tinder.hasOwnProperty('isLoggedIn'));// true yes this property exists
console.log(tinder.hasOwnProperty('isLgged'));//false doesnt exist

