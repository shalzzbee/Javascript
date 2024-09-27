//inheritance-prototypal behaviour 

class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME IS: ${this.username}`);
    }
}


//extend 
//super keyword--refers to class extended automatically this also comes and is accessible

class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`New course was added by ${this.username}`);
    }
}

//Class constructor Teacher cannot be invoked without 'new'

const chai = new Teacher("chai", "chai@teacher.com", "123");

chai.addCourse();
chai.logMe();//due to inheritance



const masalaChai = new User("masalaChai");
//not accesed
//masalaChai.addCourse(); //masalaChai.addCourse is not a function
masalaChai.logMe();//USERNAME IS: masalaChai




console.log(chai === masalaChai);//false
console.log(chai === Teacher);//false
console.log(User === masalaChai);//false

console.log(chai instanceof Teacher);//true--inheritance

console.log(chai instanceof User);//true