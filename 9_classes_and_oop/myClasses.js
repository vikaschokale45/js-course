// class User {
//     constructor(username,email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     ChangeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// let vikas = new User("vikas","ranom@gmail.com","12345");
// console.log(vikas)
// console.log(vikas.encryptPassword())
// console.log(vikas.ChangeUsername())

function user(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;

    user.prototype.encryptPassword = function(){
        return `${this.password}abc`
    }

    user.prototype.ChangeUsername = function(){
        return `${this.username.toUpperCase()}`
    }
}

let vikas2 = new user("vikas2","random@gmail.com","123");
console.log(vikas2)
console.log(vikas2.encryptPassword())
console.log(vikas2.ChangeUsername())
