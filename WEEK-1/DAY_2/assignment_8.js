// Write a function that takes an array of numbers as input, 
// and returns a new array with only even values. 
// Read about filter in JS
 

let arr = [1,2,3,4,6,8,9,22,434,34,23,66,765,77];

function onlyEven(arr){
    return arr.filter(n => n % 2 == 0);
}

console.log(onlyEven(arr));
console.log(arr);
