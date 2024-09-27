// ES 6 ke baad
//classes

// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword() {
//         return `${this.password}abc`;
//     }

//     changeUsername() {
//         return `${this.username.toUpperCase()}`;
//     }
// }


// const chai = new User("shalini", "chai@gmail.com", "123");
// console.log(chai);//User { username: 'shalini', email: 'chai@gmail.com', password: '123' }
// console.log(chai.encryptPassword());//123abc
// console.log(chai.changeUsername());//SHALINI



//behind the scene:- if class syntax was not given


function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function () {
    return `${this.password}abc`;
}

User.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`;
}

const tea = new User("shalu", "tea@gmail.com", "258");
console.log(tea);//User { username: 'shalu', email: 'tea@gmail.com', password: '258' }
console.log(tea.encryptPassword());//258abc
console.log(tea.changeUsername());//SHALU

