let myName  = "Vikas "
// console.log(myName.length);

let myHeros = ["thor","spiderman"];

let heroPower= {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`Spidey Power is ${this.spiderman}`)
    }
}

Object.prototype.vikas = function(){
    console.log("HEY");
}

Array.prototype.HeyVikas = function(){
    console.log('Vikas Say Hello')
}

// heroPower.vikas();
// heroPower.HeyVikas();
// myHeros.HeyVikas();

// inheritance

const user = {
    name:"Vikas",
    email:"random@gmailcom"
}

const teacher = {
    makeVideo:true,
}

const teachingSupport = {
    isAvalilable:true
}

const TASupport= {
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:teachingSupport
}

// teacher.__proto__ = user

// modern syntax

Object.setPrototypeOf( teachingSupport,teacher);

let anotherUserName="vikas   ";
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`true length is ${this.trim().length}`)
}

// anotherUserName.trueLength()
"Kl rahul".trueLength()
