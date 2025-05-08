// Write a function called sum that 
// finds the sum from 1 to a number


function sum(number) {
    let sumOneToN = 0;
    for(let i = 1; i <= number; i++){
        sumOneToN = sumOneToN + i;
    }
    return sumOneToN;
}

let number = 3;
console.log(sum(number));
