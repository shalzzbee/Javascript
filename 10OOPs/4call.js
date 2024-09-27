function setUsername(username) {
    //complex DB calls
    this.username = username;
    console.log(`called`);

}

function createUser(username, email, password) {
    // setUsername(username);// method but refernce hi pass ho raha , fucntion call stack se hatt jaega

    // setUsername.call(username); //so to hold the refrence of the function we use the '.call' method
    // still no name is shown
    // call: current execution context kisi aur function ko pass kr deta hai

    //add this as a paramether in call fucntion so refrenve is passed and 'this' of create is passed and used

    setUsername.call(this, username); //now shown

    // this.username = username;


    this.email = email;
    this.password = password;
}


const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);//username nahi aayaa??? 

