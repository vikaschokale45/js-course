const myNums = [1,2,3]

// const myTotal =  myNums.reduce((acc,cuv)=>{
//     console.log(`acc:${acc} and cuv:${cuv}`)
//     return acc+cuv
// },3)

// const myTotal =myNums.reduce((acc,cuv)=>(acc+cuv),0)
// console.log(myTotal)

const shoppingCart = [
    {
        itemItem:"js course",
        price:2999
    },

    {
        itemItem:"py course",
        price:2999
    },
        
    {
        itemItem:"ds course",
        price:2999
    },
        
    {
        itemItem:"dev course",
        price:2999
    }
]

const myTotal = shoppingCart.reduce((acc,cuv)=>(acc+cuv.price),0)

console.log(myTotal)
