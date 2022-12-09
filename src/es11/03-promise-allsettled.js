const promise1 = new Promise((resolve, reject)=> reject("Rejected"))
const promise2= new Promise((resolve,reject)=>resolve('Resolved'))
const promise3= new Promise((resolve,reject)=>resolve('Resolved 2'))

Promise.allSettled([promise1,promise2,promise3]).then(res=>console.log(res))

//funciona cuando todas las promesas son resolve
Promise.all([promise1,promise2,promise3]).then(res=>console.log(res)).catch(err=>console.log(err))
Promise.all([promise2,promise3]).then(res=>console.log(res)).catch(err=>console.log(err))