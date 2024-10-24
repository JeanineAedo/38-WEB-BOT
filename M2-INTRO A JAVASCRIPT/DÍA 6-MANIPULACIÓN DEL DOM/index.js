const contenedor = document.querySelector("#contenedor")
const btn = document.querySelector("#btn")



function cambiarColor(){
  if(contenedor.style.backgroundColor == "orange"){
    contenedor.style.backgroundColor = "blue"
  }else{
    contenedor.style.backgroundColor = "orange"
  }
    
  

}

btn.addEventListener("click",cambiarColor)

const input = document.querySelector(".input")

input.placeholder = "escribe tu correo"
input.value = "escribe tu correo"

input.addEventListener("change", cambio)
function cambio (){
  console.log(input.value);
}

