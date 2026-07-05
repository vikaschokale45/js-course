function sayMyName(){
    console.log("Vikas")
}

sayMyName();

function addTwoNumbers(a,b){
    return a+b;
}

const result = addTwoNumbers(3,4)
// console.log("Result: ",result)

function loginUserMessage(username="sam"){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("vikas"))
// console.log(loginUserMessage())

function calculateCartPrice(val1,val2,...num1){
    return num1
}
//console.log(calculateCartPrice(200,400,500))
const user={
    username:"vikas",
    price:90,
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}
// handleObject(user)
handleObject({
    username:"vikas",
    price:90,
})

const newNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue([200,400,100,600]))
