// class persona{
//  constructor(nombre,apellido,edad){

//     this.nombre=nombre;
//     this.apellido=apellido;
//     this.edad=edad;
// }
// }

// let personas =[]
// let palabra = []
// while (palabra != "esc"){

//     let nombre = prompt("ingrese nombre");
//     let edad = parseInt(prompt("ingrese su edad"));
//     let apellido = prompt("ingrese su apellido");
//     let persona1 = new persona (nombre,apellido,edad)
//     personas.push(persona1)
//     palabra = prompt("ingrese esc para salir")

// }

// console.log(personas)
// // let nico = [1,2,3,4,5,6,7]
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
//     if (usuario == 1) {
//         alert("opcion 1")
//         precio(1)
//     } else if (usuario == 2) {
//         alert("opcion 2")
//         precio(2)
//     } else if (usuario == 3) {
//         alert("opcion 3")
//         precio(3)
//     } else {
//         alert("ingrese una opcion valida")
//     }
//     usuario1 = prompt("ingrese esc para salir o cualquier tecla para continuar")
// } while (usuario1 != "esc")
// alert("gracias por su reserva")

function precio(a) {
    switch (a) {
        case 1:
            alert("el precio es de $100")
            break;
        case 2:
            alert("el precio es de $200")
            break;
        case 3:
            alert("el precio es de $300")
            break;
    }
}
let productos = [{
        nombre: "Manzana",
        precio: 200,
        img: "https://walmarthn.vtexassets.com/arquivos/ids/171881/Manzana-Roja-Infantil-4-Unidades-Por-Lb-Aproximadamente-1-30.jpg?v=637666370378830000"
    },
    {
        nombre: "Banana",
        precio: 90,
        img: "https://walmarthn.vtexassets.com/arquivos/ids/171881/Manzana-Roja-Infantil-4-Unidades-Por-Lb-Aproximadamente-1-30.jpg?v=637666370378830000"
    },
    {
        nombre: "Naranja",
        precio: 231,
        img: "https://walmarthn.vtexassets.com/arquivos/ids/171881/Manzana-Roja-Infantil-4-Unidades-Por-Lb-Aproximadamente-1-30.jpg?v=637666370378830000"
    },
    {
        nombre: "Pera",
        precio: 20,
        img: "https://walmarthn.vtexassets.com/arquivos/ids/171881/Manzana-Roja-Infantil-4-Unidades-Por-Lb-Aproximadamente-1-30.jpg?v=637666370378830000"
    },
    {
        nombre: "anana",
        precio: 400,
        img: "https://walmarthn.vtexassets.com/arquivos/ids/171881/Manzana-Roja-Infantil-4-Unidades-Por-Lb-Aproximadamente-1-30.jpg?v=637666370378830000"
    }
]

function renderizado(producto) {
    let tarjeta = document.createElement("div")
    tarjeta.className = "contenedor-tarjeta"
    tarjeta.innerHTML =
        `<div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
              <div class="col-md-4">
                    <img src=${producto.img} class="img-fluid img-js rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">$${producto.precio}</p>
                    </div>
                </div>
        </div>
    </div>`
    document.getElementById("contenedor-productos").append(tarjeta)
}
productos.forEach(element => {
    renderizado(element)
})
let buton1 = document.getElementById("btnprimary")
buton1.onclick = () => {console.log("click")}


class Carrito {
    constructor(items) {
        this.items = JSON.parse(localStorage.getItem("carrito")) || []
    }
    agregar(objeto) {
        this.items.push(objeto)
        localStorage.setItem("carrito", JSON.stringify(this.items))
    }
    sacar(objeto) {
        let producto = this.items.find(element => element.name === objeto.name)
        let posicion = this.items.indexOf(producto)
        this.items.splice(posicion, 1)
        localStorage.setItem("carrito", JSON.stringify(this.items))
    }
    listar() {
        return this.items.length
    }
}
const carrito1 = new Carrito()
console.log(JSON.parse(localStorage.getItem("carrito")))

//  let objeto = new Carrito (productos)
//  const producto1 ={  
//      name:"milanesa",
//      precio:100
//  }
//  console.log(producto1)

//  console.log(objeto.agregar(producto1))
//  console.log(objeto)
//  console.log(objeto.sacar(producto1))

// const productos = [
//     {
//         id:1,
//         nombre:'papa'
//     },
//     {
//         id:2, 
//         nombre:'arroz'
//     }
// ]
// //seleccion de productos
//  let buscar = parseInt(prompt("ingrese id"))
//  let encontrado = productos.find(element => element.id === buscar)


// //  acumular los prductos seleccionados
//  let carrito = []
//    carrito.push(encontrado)
//    console.log(carrito)
// let banana={
//     nombre: "Banana",
//     precio: 90,
//     img: "https://walmarthn.vtexassets.com/arquivos/ids/171881/Manzana-Roja-Infantil-4-Unidades-Por-Lb-Aproximadamente-1-30.jpg?v=637666370378830000"

// }
// console.log(banana.nombre)