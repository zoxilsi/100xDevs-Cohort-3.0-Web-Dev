// Create a function that takes an array of objects as input,
// and returns the users whose age > 18 and are male


let users = [
    {name : "zoxilsi", age: 19, place: "kannur", gender : "male"},
    {name : "Aneeja", age: 29, place: "Kottayam", gender : "female"},
    {name : "Abhijith", age: 18, place: "Kollam", gender : "male"}
]

function filterAdultMale(users){
    const user = users.filter(user => user.age >= 18 && user.gender === 'male');
    return user;
}

console.log(filterAdultMale(users));
