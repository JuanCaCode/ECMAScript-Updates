//SETTERS y GETTERS
class user {
    //methodo constructor
    constructor(name,age){
        this.name = name
        this.age = age
    }
    //methods
    #speack(){
        return "Hello"
    }
    saludar(){
        return `${this.speak()} ${this.name}`
    }

    get #uAge(){
        return this.age
    }
    set #uAge(n){
        this.age = n
    }
}

const babyloper = new user('Carlitos', 8)
console.log(babyloper.uAge)
console.log(babyloper.uAge = 20)