//let myname = "shalini";
//console.log(myname.length);//7


//gadbad - spaces bhi count hori hain

// let myname = "shalini     ";
// console.log(myname.length);//12

// // console.log(myname.truelength);//undefined

// console.log(myname.trim().length);//7---->not good

// console.log(myname.truelength());//myname.truelength is not a function



let myHero = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`spider power is ${this.spiderman}`);

    }
}


//objcet ke andar prototype me method add krdiya shalini naam ka
Object.prototype.shalini = function () {
    // console.log(`shalini is in all objects`);
}

//another function used on array
Array.prototype.hishalini = function () {
    // console.log(`shalini says hello`);

}

// heroPower.shalini();   // objects

// myHero.shalini(); //in array

// //another function used on array
// myHero.hishalini();
// //heroPower.hishalini(); //not accessible in objects





//inheritance- --->-property -prototypal inheritance --- '__proto__'  //info link ya info exchange

const user = {
    username: "chai",
    email: "chai@gmail.com"
}

const Teacher = {
    makeVideo: true,
}

const TeachingSupport = {
    isAvailable: false,
}

const TASupport = {
    makeAssignment: 'js assignment',
    fullTime: true,
    __proto__: TeachingSupport,
}

Teacher.__proto__ = user;



// MODERN SYNTAX of inheritance

Object.setPrototypeOf(TeachingSupport, Teacher); //Ta me teacher ki property daal do

let anotherUsrname = "chaiaurcode              ";

String.prototype.trueLength = function () {
    console.log(`${this}`);//chaiaurcode--jisne call kiya uska naam
    //console.log(`${this.name}`);//undefined
    console.log(`True Length is ${this.trim().length}`);
}

anotherUsrname.trueLength();

"shalini".trueLength();
"coffee".trueLength();