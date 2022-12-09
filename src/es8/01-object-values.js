//nos devuelve un array con los valores correspondientes a las propiedades ennumerables de un objeto.

const countries = {MX:'Mexico',CO:'Colombia',CL:'Chile',PE:'Peru'}
//solamente nos trae los valores del objeto y crea un array de strings
console.log(Object.values(countries))
//nos trae la llave
console.log(Object.keys(countries))