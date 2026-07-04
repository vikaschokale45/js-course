//object literals

const mySym = Symbol("key1")

const user = {
    name:"vikas",
    "full name" :"abc",
    [mySym] : "mykey1",
    age:18,
    location:"Pune",
    Email:"random@gmail.com",
    isLoggedIn:false
}

// console.log(user.Email)
// console.log(user["Email"])
// console.log(user["age"])
// console.log(user["full name"])
// console.log(typeof user[mySym])

user.Email = "over@gmail.com"
// Object.freeze(user)
// console.log(user)

user.greeting = function(){
    console.log("Hello js user");
}

user.greetingtwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(user.greeting())
console.log(user.greetingtwo())
