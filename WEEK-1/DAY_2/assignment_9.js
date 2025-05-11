// Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old

let users = [
    {name : "zoxilsi", age: 19, place: "kannur"},
    {name : "Aneeja", age: 29, place: "Kottayam"},
    {name : "Abhijith", age: 18, place: "Kollam"}
]

function print18Plus(arr){
    return users.filter(user => user.age > 18);
}

console.log(print18Plus(users));
