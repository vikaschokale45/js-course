const promiseOne = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Complete")
        resolve()
    },1000)
});

promiseOne.then(()=>{
    console.log("Promise consumed")
});

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Done")
        resolve()
    },1000)

}).then(()=>{
    console.log("DOne2")
});

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username:"vikas",Email:"random@gmail.com"})
    },1000)

}).then((user)=>{
    console.log(user)
})

const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false;
        if (!error) {
            resolve({username:"Vikas",password:"123"})
        } else{
            reject('ERROR')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("Finally Over")
});

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username:"JavaScript",password:"123"})
        } else{
            reject(`Error:JS went eorng`)
        }
    },1000)
});

async function consumePromiseFive(){
    try{
        let response = await promiseFive;
        console.log(response)
    } catch (error){
        console.log(error)
    }
}

consumePromiseFive()

async function getAllUsers() {
    try{
        const reponse = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await reponse.json()
        console.log(data);
    } catch (error){
        console.log("error",error)
    }
}
getAllUsers();

fetch('https://api.github.com/users/vikaschokale45').then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)

})
