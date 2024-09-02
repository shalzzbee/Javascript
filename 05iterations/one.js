//for loop

// for (let i = 0; i < 10; i++) {
//     const no = i;
//     console.log(no);
// }

for (let i = 0; i < 10; i++) {
    const no = i;
    if (no == 5) {
        //console.log("5 is d best");
    }
    //console.log(no);
}


for (let i = 0; i < 10; i++) {
    // console.log(`outer loop value : ${i}`);

    for (let j = 0; j < 10; j++) {
        //console.log(`inner loop value : ${j} and inner loop ${i}`);
        //  console.log(i + '*' + j + '=' + i * j)
    }

}

const arr = ["flash", "batman", "superman"]
//console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    //console.log(element);
}


//conditions-

//break and continue

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("5 is best");
        break;
    }
    console.log(`value of i is ${i}`);
}



for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log("5 is best");
        continue; //5 ke alawa sab print
    }
    console.log(`value of i is ${i}`);
}