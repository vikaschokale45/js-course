const marvel_heros=["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// const allHeros =  marvel_heros.concat(dc_heros)
// console.log(allHeros)

const all_new_heros=[...marvel_heros,...dc_heros]
console.log(all_new_heros)

const array=[1,2,3,4,[5,6],7,[6,7,[4,5]]]
const newArray=array.flat(Infinity)
console.log(newArray)

console.log(Array.isArray("vikas"))
console.log(Array.from("vikas"))
console.log(Array.from({name:"vikas"}))

let score1=100
let score2=300
console.log(Array.of(score1,score2))
