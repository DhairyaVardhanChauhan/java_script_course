const promise = new Promise((resolve,reject)=>{

})

console.log(promise); // by default promises are pending


const promise2 = new Promise((resolve,reject)=>{
    resolve("hello");
})

console.log(promise2); 


const promise3 = new Promise((resolve,reject)=>{
    reject("promise rejected");
})

console.log(promise3); 

