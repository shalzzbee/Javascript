//advanced object related and interview question if pi ki value was asked to change 

// const myNewObj = {
//     username: "username"
// }

// console.log(myNewObj);



const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
//console.log(descriptor);
//{
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }



//for example

// console.log(Math.PI);//3.141592653589793
// Math.PI = 6//over write nahi ho skta as it is a constant
// console.log(Math.PI);//no change



// const mynewObj = Object.create(null);
// console.log(mynewObj);//[Object: null prototype] {}


// const chai = {
//     name: "ginger chai",
//     price: 250,
//     iAvalilable: true,
// }

//console.log(chai);//{ name: 'ginger chai', price: 250, iAvalilable: true }

//DESCRIPTOR PROPERTIES OF THIS OBJECT CHAI AND CAN THEY BE RESET????????????/

//console.log(Object.getOwnPropertyDescriptor(chai));//undefined--as chai is a object not a property

//console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// {
//     value: 'ginger chai',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }


// Object.defineProperty(chai, 'name', {
//     writable: false,
//     enumerable: false,
// })
//console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// {
//     value: 'ginger chai',
//     writable: false,
//     enumerable: false,
//     configurable: true
//   }




const chai = {
    name: "ginger chai",
    price: 250,
    iAvalilable: true,

    orderChai: function () {
        console.log("chai nahi bani, code fatt gya");
    }
}


//kuch parameters loop ke part hi nahi banegi
Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,
})


// for (let [key, value] of chai) {
//     console.log(`${key}: ${value}`); //chai is not iterable as it is an object

// }

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`);
    }

    // name: ginger chai
    // price: 250
    // iAvalilable: true


    //this is not required so check the condition first

    // name: ginger chai
    // price: 250
    // iAvalilable: true
    // orderChai: function () {
    //     console.log("chai nahi bani, code fatt gya");
    // }



}