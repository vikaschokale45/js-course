const name = "Vikas"
const repoCount = 24

//console.log(name + repoCount + " value")

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("VikasOp")
// console.log(gameName.__proto__);

// console.log(gameName.length)
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4);
// console.log(newString);

const anotherString = gameName.slice(-3,0)
// console.log(anotherString);

const newStringOne = "   hitesh   "
// console.log(newStringOne.trim());

const url="www.googleop.com"
console.log(url.replace('op','_'))

let oldName = "Vikas-op"
console.log(oldName.split("-"))
