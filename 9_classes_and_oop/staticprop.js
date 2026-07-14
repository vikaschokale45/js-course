class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`username ${this.username}`)
    }

    static createId(){
        console .log( `123`)
    }
}
const vikas =new User("vikas")
 
class teacher extends User{
    constructor(username,email){
        super(username)
        this.email =email
    }
}

let vikas2 = new teacher("vikas","random@gmailcom")
console.log(createId())