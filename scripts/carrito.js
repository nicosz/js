class Carrito {
    constructor(items) {
        this.items = JSON.parse(localStorage.getItem("carrito")) || []
    }
    add(object) {
        let product = this.items.find(element => element.object.name === object.name)
        if (product) {
            product.quantity++
        } else {
            this.items.push({
                object,
                quantity: 1
            })
        }
        localStorage.setItem("carrito", JSON.stringify(this.items))
    }
    remove(object) {
        let product = this.items.find(element => element.object.name === object.name)
        let posicion = this.items.indexOf(product)
        if (product.quantity > 1) {
            product.quantity--
        } else {
            this.items.splice(posicion, 1)
        }
        localStorage.setItem("carrito", JSON.stringify(this.items))
  
    }
    list() {
        let contador = 0
        for (const element of this.items) {
            contador += element.quantity
        }
        return contador
    }
}

export const carrito1 = new Carrito()