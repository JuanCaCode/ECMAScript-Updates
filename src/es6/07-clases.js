//declaracion de clase
class User {
}
//creando instancia de una clase
const camilo = new User()

//-----------------------------------
class Persona{
    //methods
    greeting(){
        return "Hello"
    }
}
const juan = new Persona()
console.log(juan.greeting())

const bebeloper = new Persona()
console.log(bebeloper.greeting())

//constructor

class Humano {
    constructor(){
        console.log("Nuevo usuario")
    }
    greeting(){
        return "Hello soy un Humano"
    }
}

const david = new Humano()
console.log(david.greeting())


// THIS
class Personaje{
    constructor(name){
        this.name = name
    }
    //methods
    speak(){
        return 'Hello'
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }
}

const pibe = new Personaje('Pibe Valderrama')
console.log(pibe.greeting())

//SETTERS y GETTERS
class user {
    //methodo constructor
    constructor(name,age){
        this.name = name
        this.age = age
    }
    //methods
    speack(){
        return "Hello"
    }
    saludar(){
        return `${this.speak()} ${this.name}`
    }

    get uAge(){
        return this.age
    }
    set uAge(n){
        this.age = n
    }
}

const babyloper = new user('Carlitos', 8)
console.log(babyloper.uAge)
console.log(babyloper.uAge = 20)