// let nombre = parseInt(prompt("ingresa un numero"))
// let edad = parseInt (prompt("ingresa otro numero"))

// // while (edad < 18) {
// //  edad = prompt("cuantos años tenes")
// // }

// suma(edad, nombre)


// function suma (a, b){

//     let suma = a + b;

//     return console.log(suma)
// }

// condicionales, bucles y funciones 


let usuario1 = " ";

do {
    let usuario = parseInt(prompt("ingrese la opcion deseada:\n promocion 1 \n promocion 2 \n promocion 3"))
    if(usuario == 1){
        alert("opcion 1")
        precio(1)
    }else if (usuario == 2){
        alert("opcion 2")
        precio(2)
    }else if (usuario == 3){
        alert("opcion 3")
        precio(3)
    }else {
        alert("ingrese una opcion valida")
    }
     usuario1 = prompt("ingrese esc para salir o cualquier tecla para continuar")
}while (usuario1 != "esc")
alert("gracias por su reserva")
function precio (a){

    if (a==1){
        alert("el precio es de $100")
    }
    else if (a==2){
        alert("el precio es de $200")
    }
    else if (a==3){
        alert("el precio es de $300")
    }
}