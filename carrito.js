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

export const carrito1 = new Carrito()