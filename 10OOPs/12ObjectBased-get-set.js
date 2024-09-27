//Object based syntax of getters and setters
//rarely used

const User = {
    _email: 's@sb.com',   //underscore means a private property but not in get set
    _password: '1258',


    get email() {//memory se leke aao and over write
        return this._email.toUpperCase();
    },

    set email(value) { //memory me leke jao
        this._email = value;
    }
}

//u can use factory function -'Object.create()'
//like 'new' was a contructor function


const tea = Object.create(User);

console.log(tea.email);//S@SB.COM


//+++++++++++++++++++NEW PROPOSAL IN JS ++++++++++++++++
//in ES2022 private properties
//using # 'hash' instead of _ 'underscore'