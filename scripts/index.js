import {
    carrito1
} from "./carrito.js"

let productos = [{
    nombre: "Manzana",
    precio: 200,
    img: "https://walmarthn.vtexassets.com/arquivos/ids/171881/Manzana-Roja-Infantil-4-Unidades-Por-Lb-Aproximadamente-1-30.jpg?v=637666370378830000",
    id: "1"
},
{
    nombre: "Banana",
    precio: 90,
    img: "https://st.depositphotos.com/1642482/1904/i/450/depositphotos_19049353-stock-photo-fruit.jpg",
    id: "2"
},
{
    nombre: "Naranja",
    precio: 231,
    img: "https://fraganciastudeseo.es/wp-content/uploads/2018/05/Naranja-600x600.jpg",
    id: "3"
},
{
    nombre: "Pera",
    precio: 20,
    img: "https://laopinion.com/wp-content/uploads/sites/3/2015/10/pera.jpg?quality=60&strip=all&w=1196",
    id: "4"
},
{
    nombre: "Anana",
    precio: 400,
    img: "https://granjaus.com/wp-content/uploads/2019/02/AA113.jpg",
    id: "5"
}
]
function renderizado(producto) {
    let tarjeta = document.createElement("div")
    tarjeta.className = "contenedor-tarjeta my-0"
    tarjeta.innerHTML =
        `<div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0 ">
              <div class="col-md-4">
                    <img src=${producto.img} class="img-fluid img-js rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body card-colors">
                      <h5 class="card-title  text-success">${producto.nombre}</h5>
                      <p class="card-text  text-success">$${producto.precio}</p>
                      <button class="btn btn-outline-success" id="${producto.id}">Agregar al Carrito</button>
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

function listenerBoton(element) {
    let button = document.getElementById(element.id)
    button.addEventListener("click", () => {
        carrito1.agregar(element)
        console.log(carrito1);
        Toastify({
            text: "SE AGREGO AL CARRITO DE COMPRAS ",
            duration: 1200,
            gravity: "top", 
            position: "right", 
            style: {
                background: "#212529",
                color: "#19794e"
            },
          }).showToast();
    })
    
    
}

