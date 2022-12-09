let fnAsync = ()=>{
    return new Promise((resolve, reject)=>{
        (true) ? setTimeout(()=>resolve('Async!!!'),2000) : reject(new Error('Error!') )
    })
}
//nos permitirá identicicar la funcion con el concepto async
const anotherFunction = async ()=>{
    const something = await fnAsync()

    console.log(something)
    console.log('Hello')
}

console.log('Before')
anotherFunction()
console.log('After')
