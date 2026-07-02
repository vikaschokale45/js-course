// # Primitive data type

// 7 types: String,Number,Boolean,null,undefined,Symbol,Big-int

const score=100
const scoreValue=100.3

const isLoggedIn = false
const Temp=null
let userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);
//reference(non primitive)
// Array,Objects,Functions

const heros = ["Ironman","Thor"];
let Obj = {
    name:"Vikas",
    age:19,
}

const myFunction = function () {
    console.log("Hello World");
}

console.log(typeof myFunction);
console.log(typeof heros)
console.log(typeof id)

//*********************************** *//

//Stack(Primitive) ,Heap(Non-Primitive)

let myName = "Vikas";
let anotherName = myName;
anotherName = "Vik";
console.log(myName);
console.log(anotherName);

let userOne= {
    email:"random@gmail.com",
    upi:"use@sbi",
}

let userTwo = userOne;

userTwo.email = "user@gmail.com";
console.log(userOne.email);
console.log(userTwo.email)

