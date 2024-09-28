const myArr = [];
//%DebugPrint(myArr)//DebugPrint is not defined
//it is defined in d8 engine of v8 engine
//jsvu downlaod krlo


//ARRAY- 2 types:
//1. CONTINUOUS ARRAY
//2. HOLEY ARRAY - (holes)


//OPTIMIZATION:
//SMI (small integer)
//PACKED ELEMENT
//DOUBLE (float, strings, function)

//arrays -> elements(string, float, number etc) -> differnt optimization

//const arr = [1, 2, 3, 4 ,, 7];//HOLEY ARRAY
const arr2 = [1, 2, 3, 4, 5];
//packed_smi_elements---best---but restrictive elemets --only numbers, not even float


arr2.push(6.0);//packed_double_elements

arr2.push('7');///PACKED ELEMENTS
//ek baar downgrade hua toh upgrade nahi hoga ... ek baar packed bana toh packed smi nahi banega bhale hi elemets delete krdo


arr2[10] = 11;
//HOLEY_ELEMENTS--multiple types + gap

console.log(arr2);//[ 1, 2, 3, 4, 5, 6, '7', <3 empty items>, 11 ]
console.log(arr2.length);//11
console.log(arr2[9]);//undefined--costly operation



//1. BOUND CHECK--not in bound of length of array
//but if found inside the bound or continuous array

//2. check hasOwnProperty(arr2, 9, true/false)   --- koi property toh nahi hai-t/f
//3. check hasOwnProperty(arr2.prototype, 10)    === check in prototype
//4. ask hasOwnProperty(Object.prototype, 10)    ---object ke andar check kro ki koi project

//this is the most expensive check----HOLES are very expensive


const arr3 = [1, 2, 3, 4, 5];
console.log(arr3[8]);//undefined--out of bound
console.log(arr3[2]);//3  --in bound





//ORDER of optimized ---> continuous
//PACKED_SMI  >>  PACKED_DOUBLE_SMI  >> PACKED_ELEMENTS


//ORDER OF HOLEY--holes
//H_SMI > H_DOUBLE > H_PACKED

//30 variations and more





//ek baar downgrade hua toh upgrade nahi hoga ... ek baar packed bana toh packed smi nahi banega bhale hi elemets delete krdo
const arr4 = new Array(3);
//just 3 holes  -  HOLEY_SMI_ELEMENTS

//Downgrade:-

arr4[0] = '1'; //string daal di
// HOLEY_ELEMENTS
//forever holey

arr4[0] = '1';
arr4[1] = '2';
arr4[2] = '3';

//declaration of an empyt array is making problem

const arr5 = [];//empyt array
//SMI--optimized mila hai

//ab push krdo
arr5.push('1')//PACKED_ELEMENTS
arr5.push('2')
arr5.push('3')


const arr6 = [1, 2, 3, 4, 5];////SMI--optimized mila hai
// degrade
arr6.push(NaN);//PACKED_DOUBLE
arr6.push(Infinity);//PACKED_DOUBLE



//recommendation
//for, for-of, for-each---use these more


