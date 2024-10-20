//const user = {
  //  name: "Jonh",
   // lastname: "Doe",
   // age:22

//}

//const {name, lastname, age} = user
//console.log(name, lastname, age)

const titulo = document.getElementById("titulo")
const caja = document.getElementsByClassName("caja")


console.log(caja)

const cajasArreglo = [...caja]
console.log(cajasArreglo)

console.log(titulo)
titulo.innerHTML = "Titulo"