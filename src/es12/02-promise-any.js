const promise1 = new Promise((resolve, reject)=> reject("Rejected"))
const promise2= new Promise((resolve,reject)=>resolve('Resolved'))
const promise3= new Promise((resolve,reject)=>resolve('Resolved 2'))

//va a capturar la primera que resuelva de forma satisfactoria
Promise.any([promise1,promise2,promise3]).then((res)=>console.log(res))