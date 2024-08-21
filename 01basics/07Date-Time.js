//date object --- represents a single moment in time begins from 1 jan 1970
//temporal--global object API  ---in future use


let mydate = new Date()
console.log(mydate);  //not readable 
console.log(mydate.toString());  //convert to string
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());//21/8/24
console.log(mydate.toLocaleString());//21/8/24 + time



console.log(typeof mydate);//object


//declaration of a specific date
let createdDate = new Date(2023, 0, 23);  //0--jan
console.log(createdDate.toDateString()); //monday jan 23 2023

createdDate = new Date(2023, 0, 23, 5, 7);
console.log(createdDate.toLocaleString());  //5:07 am

createdDate = new Date("2024-01-15");  //yy-mm-dd
console.log(createdDate.toLocaleString());

createdDate = new Date("01-15-2024");//indian  mm-dd-yy
console.log(createdDate.toLocaleString());

//+++++++++++++++++++++ TIME STAMP +++++++++++++++++++++
//used in polls, quizes

//console.log(Date.now() / 1000);  //problem ---> decimal values also we get
console.log(Math.floor(Date.now() / 1000)); //solution


let mytimestamp = Date.now();//exact abhi ki date

// console.log(mytimestamp); //in miliseconds
// console.log(createdDate.getTime()); //in miliseconds--1 jan se time bhi nikal lo



//date methods


let newDate = new Date();
console.log(newDate);//normal date
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());



//console.log(`date is ${newDate.getDay()} and the time is ${Math.floor(Date.now() / 1000)}`);

//ctrl+space = methods that u can use


//internationalisation
//fromat ko aur cutomize krne ko
newDate.toLocaleString('default', {
    weekday: "long",
    // timeZone:''
});//u define an object inside it and any no of parameters can be defined
