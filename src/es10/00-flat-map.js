//nos devuelve una matriz de cualquier submatriz,
// una matriz es el concepto de arreglo, tenemos arreglos aninados dentro de arreglos y así es una matriz
//FLAT
const array = [1,2,3,4,5,[1,5,3,8,9,[2,8,10,9,1]]]
console.log(array.flat(3))

//FLATMAP por cada elemento del array, retorna un array con el valor de un elemento y el mismo multiplicado por 2
const array2 = [1,2,3,4,5]
console.log(array2.flatMap(value=>[value, value*2]))
