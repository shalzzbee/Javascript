
//PROMISE- the promise object represnts the eventual completion (or failure)of an asynchronous operation and its resulting value
//(abhi ke abhi exectute nahi so skta)---future me jaake complete hota h

//3 states
//--pending: initial state, neither fulfilled nor rejected
//--fullfilled: operation completed successfully
//--rejected: operation failed.

//create promise
//consume promise but learn how to make them

//fetch('https://google.com').then().catch().finally();//run, error,execute



//promise made
const pro1 = new Promise(function (resolve, reject) {
    //do an async task---
    //db class, cryptograpgy, network

    setTimeout(() => {
        console.log('Async task 1 complete');
        resolve();//connected to '.then'
    }, 1000);
});



//consume promise
//.then=>resolve=>callback func=>returns value

pro1.then(function () {
    console.log('Promise consumed');//proimse is not fullfilled untill resolved is put in promise
})


//without storing into a variable and directly putting [.then]
new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log('async task 2');
        resolve();
    }, 1000);

}).then(() => {
    console.log("async 2 resolved");
})


//passing values in '.then' through 'resolve()'--resolve ke andar data jaega in form of objects (mostly)

const pro3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "Shalini", email: "shalini@gmail.com" })
    }, 1000);
})

//resolve ke andar jo parameter pass kra hai wahi mil jaega
pro3.then((user) => {
    console.log(user);//data is printed
})


//use of reject
const pro4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "Shalu", password: "12345" })
        } else {
            reject('ERROr, SOMeTHING WENT WRONG')
        }
    }, 1000)
})


//consumption of promise

//callback hell
// const userName = pro4.then((user) => {
//     console.log(user);
//     return user.username;// kaha jaa raha h?

// })

// console.log(userName);// error aa jaega promise rjecettion



//.then chaining---jo value upar wale .then se aaegi wahi next .then me jaegi---to extract data
pro4
    .then((user) => {
        console.log(user);
        return user.username;// kaha jaa raha h?===> next .then me
    })
    .then((myname) => {
        console.log(myname);

    })
    .catch((errror) => {  //catches error
        console.log(errror);
    })
    .finally(() => console.log("The promise is either resolved or rejected"));






//aysnc-await se promise handle krdo---wait and then do-- cant handle catch

const pro5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "javascript", password: "78" })
        } else {
            reject('ERROr, js WENT WRONG');//error code
        }
    }, 1000)
})


//async await cant directly handle errors
// async function consumePro5() {
//     let response = await pro5;  //wait for response either error or resolve
//     console.log(response);
// }



//handling using try catch

async function consumePro5() {
    try {
        let response = await pro5;  //wait for response either error or resolve
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePro5();




//  https://jsonplaceholder.typicode.com/users  === API: array of differnet users

//fetch returns a promise


//1ST METHOD--- TRY AND CATCH


// async function getAllusers() {

//     try {
//         const respond = await fetch('https://jsonplaceholder.typicode.com/users');
//         //console.log(respond);

//         const data = await respond.json();//takes time so use await
//         console.log(data);//dummy data
//     } catch (error) {
//         console.log("E:", error);

//     }

// }


// getAllusers();








//2ND METHOD---.THEN .CATCH


// fetch("https://jsonplaceholder.typicode.com/users")
fetch("https://api.github.com/users/shalzzbee")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data); //pehele print ho jaega phir upar wale promises--> why?? next lecture
        //kyuki high priority is given to fetch request.

    })
    .catch((error) => console.log("error"));