let btn = document.getElementById("btn")

//cuando se realice click en el boton, importará el modulo js
btn.addEventListener('click',async ()=>{
    const module=await import('./06-m-module.js')
    console.log(module)
    module.hello()
})
console.log('Segumos trabajando')