// arrays destructuring 
let fruits = ['Apple','Banana','Strawberry']
let [a,,c]=fruits

console.log(a,c)
console.log(a,fruits[1])

//Object Destructuring
let user = {username:'Oscar', age:34}
let {username,age}=user

console.log(username,age)

//Spread operator 
let person = {name:'Oscar',age:27}
let country = 'COL'

let data = {id:1,...person, country}
console.log(data)

//rest paramas
function sum(num,...values){
    console.log(values)
    console.log(num+values[0])
    return num+values[0]
}
sum(2,1,2,3,4,5)



function solution(json1, json2) {
    // Tu código aquí
   var json1 = json1 || { name:'Mr Michi', food:'Pescado' };
   var json2 = json2 || { age:12, color:'Blanco' };
   
   var fusion = {...json1,...json2}
   console.log(fusion)
   return fusion
}
solution()