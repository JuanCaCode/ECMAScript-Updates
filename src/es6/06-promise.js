const anotherFunction = ()=>{
    return new Promise((resolve, reject)=>{
        if(false){
            resolve('Hey!!! esto está resuelto')
        }else{
            reject("This isn't working")
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(error => console.log(error))

