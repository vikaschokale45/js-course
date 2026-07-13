const user = {
    username:"vikas",
    loginCount:8,
    signedIn:true,

    getUserDetail:function(){
        // console.log(`Got user details from databases`)
        // console.log(`Username: ${this.username}`)
        // console.log(this)
    }

}

// console.log(user.username);
// console.log(user.getUserDetail())
// console.log(this);


// const PromiseOne = new Promise();
// const date = new Date();

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount= loginCount;
    this.isLoggedIn =isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this
}

const userOne =new User("Vikas","13",false);
const userTwo =new User("Rohan","12",false);
console.log(userOne.constructor);
