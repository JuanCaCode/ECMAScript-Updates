// Definimos un generator con un asterisco en function
function* iterate(array){
    for (let value of array){
        // yield palabra reservada: va a retornar cada uno de los valores según el caso
        yield value;
    }
}

const it = iterate(['juan','carlos','david','ana','isabela','karen','diego']);
// next reservado de ejecución que se crea dentro del generator
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);