// Write a function that takes a user as an input and greets them with their name and age



let user = {
    name:"zoxilsi",
    age:24
}

function greet(newUser){
    let {name, age } = newUser;
    console.log(`Hello ${name} You are ${age} years old.`)
}

greet(user);


