for(let i = 1 ; i <= 10; i++){
    //console.log("Soy el indice" + i);
}

let indice = 1 
while(indice <= 10){
   // console.log("Soy el indice " + indice + " del ciclo while");
    indice++
}

indice = 0
do {
   // console.log("Soy el indice " + indice + " del ciclo do While");
    indice++
} while (indice <= 10);



function prepararHuevo(metodoDePreparacion) {
    let huevo = metodoDePreparacion
   
    if (huevo === "frito") {
        console.log("Prepara el sartén");
        console.log("echa el huevo");
        console.log("Espera que se frite");
        console.log("saca el huevo del sarten");
        console.log("disfruta")
    }else if(huevo === "cocido") {
        console.log("Prepara la olla");
        console.log("echa el huevo con cáscara");
        console.log("Espera que se cocine unos minutos");
        console.log("saca el huevo de la olla");
        console.log("disfruta")
    }else{
        console.log("Prepara el sartén");
        console.log("echa el huevo");
        console.log("Espera que se frite o cocine");
        console.log("saca el huevo del sarten");
        console.log("Disfruta de tu huevo " + huevo);
    }
}

function sumarNumeros(numero1,numero2,numero3){
    let total= numero1 + numero2 + numero3
    console.log(total);

}

function restarNumeros(numero1,numero2) {
    return numero1 - numero2
    
}

console.log(restarNumeros(5,4));   

prepararHuevo("Omelette")
sumarNumeros(2,4,6)