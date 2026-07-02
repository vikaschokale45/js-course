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
