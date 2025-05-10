// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

function greet(user){
    let {name, age, gender} = user;
    let title;
    if(gender = 'male'){
        title = 'Mr. ';
    }
    else{
        title = 'Mrs. '
    }

    console.log(`Hi ${title}${name}, Your age is ${age}.`);

}

let user = {
    name: 'Zoxilsi',
    age:24,
    gender:'male'
}

greet(user);
