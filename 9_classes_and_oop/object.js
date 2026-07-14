function multipleBy3(num){
    return num*3
}
multipleBy3.power=2
console.log(multipleBy3.power)
console.log(multipleBy3.prototype)

function createUser(username,score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.printMe =function(){
    console.log(`score is ${this.score}`)
}

const chai = new createUser("chai",25)
const tea = new createUser("tea",250)

chai.printMe();

