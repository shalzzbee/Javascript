//getters and setters- to customize your code by adding some encryption or whatsver
//by defualt present in class

//if getter is defined then setter also has to get defined

class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    //getters always return a value 
    get email() {
        return this._email.toUpperCase();
    }

    //setters ko return nahi krte
    set email(val) {
        this._email = val;
    }


    get password() {
        // return this._password.toUpperCase();//Cannot set property password of #<User> which has only a getter at new User

        return `${this._password}hitesh`;
    }

    //if getter is defined then setter also has to get defined

    set password(value) {
        this._password = value;//Maximum call stack size exceeded at set password
    }
    //constructor bhi password ko set kr raha hai and setter is also doing the same
    //so there is a race btw them ...Maximum call stack size exceeded
}

const shalini = new User("s@shalini.ac.in", "abc")
console.log(shalini.password);
console.log(shalini.email);
