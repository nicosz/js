import {
    carrito1
} from "./carrito.js"

async function traerArray() {
    const response = await fetch("../jsons/array.json")
    return response.json()
}

async function products() {
    let products = await traerArray()
    for (const element of products) {
        rendering(element)
        listenerButton(element)
    }
}

products()

function rendering(product) {
    let card = document.createElement("div")
    card.className = "contenedor-card my-0"
    card.innerHTML =
        `<div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0 ">
              <div class="col-md-4">
                    <img src=${product.img} class="img-fluid img-js rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body card-colors">
                      <h5 class="card-title  text-success">${product.name}</h5>
                      <p class="card-text  text-success">$${product.price}</p>
                      <button class="btn btn-outline-success" id="${product.id}">Agregar al Carrito</button>
                    </div>
                </div>
        </div>
    </div>`
    document.getElementById("contenedor-productos").append(card)
}


function listenerButton(element) {
    let button = document.getElementById(element.id)
    button.addEventListener("click", () => {
        carrito1.add(element)
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
        iconoCarrito()
    })


}

function iconoCarrito() {
    let p = document.getElementById("numero-carrito")
    p.innerHTML = carrito1.list()
}
iconoCarrito()