let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreateDate=new Date(2023,0,23)
console.log(myCreateDate.toDateString());

let myTimeStamp=Date.now()
// console.log(myTimeStamp)
// console.log(myCreateDate.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate=new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay());
console.log(newDate.getFullYear());