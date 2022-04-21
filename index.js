
class persona{
 constructor(nombre,apellido,edad){
   
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
}
}

let personas =[]
let palabra = []
while (palabra != "esc"){

    let nombre = prompt("ingrese nombre");
    let edad = parseInt(prompt("ingrese su edad"));
    let apellido = prompt("ingrese su apellido");
    let persona1 = new persona (nombre,apellido,edad)
    personas.push(persona1)
    palabra = prompt("ingrese esc para salir")

}

console.log(personas)
// let nico = [1,2,3,4,5,6,7]
// nico.push(8)

// for (let dario of nico){

//     console.log(dario)

// }

// let persona = {nombre:"nico" , edad:22}

// for (let nico in persona){

//     console.log(nico, persona[nico])

// }




// let usuario1 = " ";

// do {
//     let usuario = parseInt(prompt("ingrese la opcion deseada:\n promocion 1 \n promocion 2 \n promocion 3"))
//     if(usuario == 1){
//         alert("opcion 1")
//         precio(1)
//     }else if (usuario == 2){
//         alert("opcion 2")
//         precio(2)
//     }else if (usuario == 3){
//         alert("opcion 3")
//         precio(3)
//     }else {
//         alert("ingrese una opcion valida")
//     }
//      usuario1 = prompt("ingrese esc para salir o cualquier tecla para continuar")
// }while (usuario1 != "esc")
// alert("gracias por su reserva")
// function precio (a){

//     if (a==1){
//         alert("el precio es de $100")
//     }
//     else if (a==2){
//         alert("el precio es de $200")
//     }
//     else if (a==3){
//         alert("el precio es de $300")
//     }
// }