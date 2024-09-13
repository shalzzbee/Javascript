const coding = ["js", "ruby", "cpp", "java", "pyhton"]

// coding.forEach((item) => {
//     console.log(item);
// })

//storing in a value
const values = coding.forEach((item) => {
    //console.log(item);
    return item
})

//console.log(values); //undefined as for each loop doesnt return values




//filter operation--callback function---condition
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newnums = nums.filter((num) => num > 4)
//console.log(newnums);//in array [56789]

//if scope is opened then use 'return' keyword
const newnums = nums.filter((num) => {
    // num > 4  //[]--empty array
    return num > 4
})
//console.log(newnums);



//for each use krke ye same kaam

const Newnums = [];

nums.forEach((no) => {
    if (no > 4) {
        Newnums.push(no)
    }
})
console.log(Newnums);



//filter out things
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// const userBooks = books.filter((bk) => bk.genre === 'History')
// console.log(userBooks);


// const userBooks = books.filter((bk) => bk.publish >= 2000)
// console.log(userBooks);


const userBooks = books.filter((bk) => {
    return bk.genre === 'Science' && bk.publish >= 1995
})
console.log(userBooks);


