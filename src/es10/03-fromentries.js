//convertirmos un array de arrays en un objeto

const entries = new Map([["name","oscar"],["age",34]])
console.log(entries)
console.log(Object.fromEntries(entries))