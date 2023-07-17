const promise4 = new Promise((resolve, reject) => {
//   resolve([1,3,3]); // in order to get data from a promise use .then
  reject("You got an error")
});  // step1: this code is used to determine whether to reject or rosolve


promise4.then((data)=>{// step2 : once the req. is accepted or rejected we then can print it using the below code
    console.log(`This is how to get data from .then `);
    console.log(data);
}).catch((err)=>{
    console.log("use .catch to thow error")
    console.log(err);
})
