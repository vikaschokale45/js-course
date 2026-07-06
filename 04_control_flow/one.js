// if 
//comparision operators
//< , >  ,<== >== ,== , != ,===,!==

// const temp = 41;

// if (2==="2"){
//     console.log("Executed");
// }

// if (2!=3){
//     console.log("Executed")
// }

// if(temp===50){
//     console.log("less than 50")
// } else {
//     console.log("temperature is greate than 50")
// }

// const score = 200

// if(score>100){
//     let power = 'fly'
//     console.log(`user power ${power}`)
// }

const balance =2000
// if(balance >500) console.log("test"),
// console.log("test2")

// if(balance<500){
//     console.log("less than 500");
// } else if (balance <750) {
//     console.log("less than 750");
// } else if (balance< 900){
//     console.log("less than 900");
// } else{
//     console.log("it is greater than 1000")
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle =false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard && 2==="2"){
    console.log("Allow to buy goods");
}

if(loggedInFromGoogle || loggedInFromEmail) {
    console.log("User Logged in");
}
