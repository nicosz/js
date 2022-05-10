class Carrito {
    constructor(items) {
        this.items = JSON.parse(localStorage.getItem("carrito")) || []
    }
    agregar(objeto) {
        let producto = this.items.find(element =>  element.objeto.nombre === objeto.nombre)
       
        if (producto) {
            producto.cantidad++
        } else {
            this.items.push({
                objeto,
                cantidad: 1
            })
        }
        localStorage.setItem("carrito", JSON.stringify(this.items))
    }
    sacar(objeto) {
        let producto = this.items.find(element => element.objeto.nombre === objeto.nombre)
        let posicion = this.items.indexOf(producto)
        if (producto.cantidad > 1) {
            producto.cantidad--
        } else {
            this.items.splice(posicion, 1)
        }
        localStorage.setItem("carrito", JSON.stringify(this.items))

    }
    listar() {
        let contador = 0
        for (const element of this.items) {
            contador+= element.cantidad
            
        }
        return contador 
    }
}


export const carrito1 = new Carrito()