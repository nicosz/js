import {
    carrito1
} from "./carrito.js"

function renderizadoTabla(item) {
    let tr = document.createElement("tr")
    tr.innerHTML = `
    <td>${item.object.name}</td>
    <td>
    <button id="sacar-${item.object.id}">-</button>
    ${item.quantity} 
    <button id="agregar-${item.object.id}">+</button>
    </td>
    <td>${item.object.price*item.quantity}</td>`
    document.getElementById("tabla-cart").append(tr)
}

for (const element of carrito1.items) {
    renderizadoTabla(element)
    listenerBoton(element)
}

function listenerBoton(element) {
    let button = document.getElementById(`agregar-${element.object.id}`)
    button.addEventListener("click", () => {
        carrito1.add(element.object)
    })
}
list() {
    let contador = 0
    for (const element of this.items) {
        contador += element.quantity

    }
    return contador
}