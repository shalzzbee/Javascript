//static properties or static prop

class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`username : ${this.username}`);

    }
    //static keyword--stop from getting accessed by the object of this class
    static createId() {
        return `123`;
    }
}

const shalini = new User("shalu");
//console.log(shalini.createId());//shalini.createId is not a function


class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe();

console.log(iphone.createId());//error even in child 