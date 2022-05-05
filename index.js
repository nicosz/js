import{carrito1} from"./carrito.js"

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
        img: "https://walmarthn.vtexassets.com/arquivos/ids/171881/Manzana-Roja-Infantil-4-Unidades-Por-Lb-Aproximadamente-1-30.jpg?v=637666370378830000",
        id: "1"
    },
    {
        nombre: "Banana",
        precio: 90,
        img: "https://walmarthn.vtexassets.com/arquivos/ids/171881/Manzana-Roja-Infantil-4-Unidades-Por-Lb-Aproximadamente-1-30.jpg?v=637666370378830000",
        id: "2"
    },
    {
        nombre: "Naranja",
        precio: 231,
        img: "https://walmarthn.vtexassets.com/arquivos/ids/171881/Manzana-Roja-Infantil-4-Unidades-Por-Lb-Aproximadamente-1-30.jpg?v=637666370378830000",
        id: "3"
    },
    {
        nombre: "Pera",
        precio: 20,
        img: "https://walmarthn.vtexassets.com/arquivos/ids/171881/Manzana-Roja-Infantil-4-Unidades-Por-Lb-Aproximadamente-1-30.jpg?v=637666370378830000",
        id: "4"
    },
    {
        nombre: "anana",
        precio: 400,
        img: "https://walmarthn.vtexassets.com/arquivos/ids/171881/Manzana-Roja-Infantil-4-Unidades-Por-Lb-Aproximadamente-1-30.jpg?v=637666370378830000",
        id: "5"
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
                        <button id="${producto.id}">Agregar al Carrito</button>
                    </div>
                </div>
        </div>
    </div>`
    document.getElementById("contenedor-productos").append(tarjeta)
}
for (const element of productos) {
    renderizado(element)
    listenerBoton(element)
}
function listenerBoton(element){
    let button = document.getElementById(element.id)
    button.addEventListener("click",() => {
        carrito1.agregar(element)
        console.log(carrito1);
    })
}
