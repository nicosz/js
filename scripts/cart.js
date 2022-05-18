import {
    carrito1
} from "./carrito.js"

function renderizadoTabla(item) {
    let tr = document.createElement("tr")
    tr.innerHTML = `
    <td>${item.objeto.nombre}</td>
    <td>
    <button id="sacar-${item.objeto.id}">-</button>
    ${item.cantidad} 
    <button id="agregar-${item.objeto.id}">+</button>
    </td>
    <td>${item.objeto.precio*item.cantidad}</td>`
    document.getElementById("tabla-cart").append(tr)
}

for (const element of carrito1.items) {
    renderizadoTabla(element)
    listenerBoton(element)
    listenerSacar(element)
}

function listenerBoton(element) {
    let button = document.getElementById(`agregar-${element.objeto.id}`)
    button.addEventListener("click", () => {
        carrito1.agregar(element.objeto)

    })
}

function listenerSacar(element) {
    let button = document.getElementById(`sacar-${element.objeto.id}`)
    button.addEventListener("click", () => {
        carrito1.sacar(element.objeto)
    })
}
