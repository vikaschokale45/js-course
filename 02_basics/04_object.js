//singleton Object
// const user = new Object()
const user = {}
user.id = "123abc"
user.name = "Sam"
user.isLogged = false

// console.log(user)

const anotherUser = {
    email:"random@gmail.com",
    fullname:{
        userfullname:{
            firstname:"vikas",
            lastname:"chokale"
        }
    }
}
// console.log(anotherUser.fullname.userfullname.firstname);

const obj1 = {1:"a",3:"b"}
const obj2 = {2:"a",4:"b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign(obj1,obj2)
const obj3  = {...obj1,...obj2}
// console.log(obj3)
// console.log(user)
// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))

//destructuring 

const course = {
    course:"Devops",
    price:"1000",
    courseInstructor:"vikas"
}

const {courseInstructor:instructor} = course
console.log(instructor)

// {
//     "name":"vikas"
//     "coursename":"Devops"
//    " price":"free"
// }

// [
//     {},
//     {},
//     {},
// ]