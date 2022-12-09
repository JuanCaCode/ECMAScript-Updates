const anotherFunction = ()=>{
    return new Promise((resolve, reject)=>{
        (true)?resolve('Hey!!! esto está resuelto'):reject("This isn't working")
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    //se agrega para tener alguna función luego de terminar una promesa, independiente del resultado.
    .finally(()=>console.log('Promise Done'))

