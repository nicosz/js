import {
    carrito1
} from "./carrito.js"

function renderingtable(item) {
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
    renderingtable(element)
    listAdd(element)
    listRemove(element)
    listcarrito(element)

}

function listAdd(element) {
    let button = document.getElementById(`agregar-${element.object.id}`)
    button.addEventListener("click", () => {
        carrito1.add(element.object)
        renderingtable(element)

    })
}

function listRemove(element) {
    let button = document.getElementById(`sacar-${element.object.id}`)
    button.addEventListener("click", () => {
        carrito1.remove(element.object)
        renderingtable(element)
    })
}

function listcarrito() {
    let p = document.getElementById("numero-carrito")
    p.innerHTML = carrito1.list()
}

let comprar = document.getElementById("finalizar-compra")
comprar.onclick = () => {
    if (carrito1.items.length !== 0) {
        alert("Compra finalizada!")
        localStorage.clear()
        let tbody = document.getElementById('tbody')
        tbody.innerHTML = ""
        location.reload()
    } else {
        alert("Agregá productos en la tienda")
    }
}