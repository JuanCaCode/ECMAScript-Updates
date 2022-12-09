//aquí aplicamos un asyncronismo en un generator, se seguirá interpretando el código mientras, se trabaja en la promesa,
//await significa a la "espera de" en este caso a la espera de la promesa, que retorna un numero y todos los demás.
//mientras eso sucede, saludamos con el Hello, porque es más rápdio.
async function* anotherGenerator(){
    yield await Promise.resolve(1)
    yield await Promise.resolve(2)
    yield await Promise.resolve(3)
}

const other = anotherGenerator()

other.next().then(res => console.log(res.value))
other.next().then(res => console.log(res.value))
other.next().then(res => console.log(res.value))
console.log('Hello!')

async function arrayOfNames(array){
    for await (let value of array){
        console.log(value)
    }
}
const names = arrayOfNames(['Camilo','Paola','Sara'])
console.log('After')