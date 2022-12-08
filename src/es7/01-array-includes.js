// nos permite trabajar sobre un array y saber si existe un elemento.

let numbers = [1,2,3,4,5,6,7,8,9]
//Preguntamos si existe el 4 en el array numbers
console.log(numbers.includes(4)) //true
console.log(numbers.includes(10)) //false

const list = ['jose','paola','maxi']

console.log(list.includes('jose'))//true
console.log(list.includes('Jose'))//false