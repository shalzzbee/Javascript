//for each loop in array

const coding = ['js', 'ruby', 'java', 'python', 'cpp']

//normal function

//callback function doesnt have name
coding.forEach(function (item) {
    // console.log(item);
})


//arrow function

coding.forEach((key) => {
    //  console.log(key);
})



//passing a function
function printMe(item) {
    //console.log(item);
}

//passing a function as a reference
coding.forEach(printMe)



//arrow function diffferent parametr
coding.forEach((item, index, arr) => {
    //console.log(item, index, arr);
})

//+++++++++important+++++++++++

//onject in arrays --database 

const myCoding = [
    {
        langname: "javascript",
        langfilename: "js"
    },
    {
        langname: "java",
        langfilename: "java"
    },
    {
        langname: "python",
        langfilename: "py"
    },
]

myCoding.forEach((item) => {
    //console.log(item);
    console.log(item.langname); //accesing object in arrays
})
