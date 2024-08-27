//destructuring of objects and json format in apis


const course = {
    coursename: "Js in hindi",
    price: "999",
    courseinstructor: "Shalini"

}

//now to access these values-  . or []

course.courseinstructor;

//to make you code clean we use object destructuring
// const {'kya value extract krni hai'} = ___ //kaha se values extract krni hai ..in this case from 'course' object

const { courseinstructor: instructor } = course

console.log(instructor);//same result 


//used in react=== by default 'props hota hai'

//const navbar=(props.company)=>{ }//hectic

//so to simplify---{} ---destructure

// const navbar=({company})=>{ }

// navbar(company="shalini")




//API--json format {...}--bacend se values ko kis format me likhte hain earlier it used to be in XML format but now its JSON

//json--object without name and both key and value should be string i.e "key":"value"


// {
//     "name":"shalini",
//     "coursename":"js in hindi",
//     "price":"free"
// }

//sometimes api come in array format [] --objects inside array
[
    {},
    {},
    {}
]


//website --- random user me api
//json formatter