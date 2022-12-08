//Parametros por defecto

function newUser(name,age,country){
    var name =name || 'Oscar'
    var age = age || 27
    var country = country || 'Colombia'
    console.log(name, age, country)
}
newUser()
newUser('Juan',15,'USA')

function newAdmin(name = 'Carlos',age=24,country='Chile'){
    console.log(name,age,country)
}
newAdmin()
newAdmin('Juan',15,'USA')