//fucntion


function myName() {  //defintion
    console.log('s');
    console.log('h');
    console.log('a');
    console.log('l');
    console.log('i');
    console.log('n');
    console.log('i');
}


//myName();//execution or refernce


// function sum(no1, no2) {  //parameters
//     console.log(no1 + no2);
// }



function sum(no1, no2) {  //parameters
    //let result = no1 + no2
    //console.log("shalini");
    //return result;
    //console.log("shalini");  //will never excetue as after return statement

    return no1 + no2   //space bach gyi

}

//sum();//NaN

// sum(5, 6);  //argument
// sum(5, "2"); //52
// sum(5, "a"); //5a
// sum(5, null); //5


const result = sum(6, 2);
//console.log("Result =", result);


//wasy to pass parameters

function loginUserMessage(username = "Sam") {  //default value---if nothing is passes
    // if (username === undefined) {
    //     console.log("Please enter a username");
    //     return;
    // }
    if (!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Shalini"));
// // console.log(loginUserMessage(""));
// console.log(loginUserMessage());  //undefined




//shopping cart problem --- when u dont know that how many number of arguments will get passed

// function calculateCartPrice(num1) {
//     return num1;
// }

//console.log(calculateCartPrice(200, 400, 500));//only 200 gets printed


//to solve this we have 'rest' operator '...'

function calculateCartPrice(...num1) {
    return num1;
}
// function calculateCartPrice(val1, val2, ...num1) {
//     return num1;
// }
//console.log(calculateCartPrice(200, 400, 500, 600));//[500,600]

console.log(calculateCartPrice(200, 400, 500, 600));//return an array of items


//passing objects in functions 

const user = {
    username: 'Shalini',
    price: 200
}

function handleObj(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);

}
//handleObj(user);  //object is passed

handleObj({
    username: "sam",
    price: 89
});



//passing arrays in functions 

const myNewArray = [200, 400, 600, 100];

function returnsecondVal(getArray) {
    return getArray[1];
}

//console.log(returnsecondVal(myNewArray));//400
console.log(returnsecondVal([200, 500, 700]));//500