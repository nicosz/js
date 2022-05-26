import {
    carrito1
} from "./carrito.js"

let products = [{
    name: "Manzana",
    price: 200,
    img: "https://walmarthn.vtexassets.com/arquivos/ids/171881/Manzana-Roja-Infantil-4-Unidades-Por-Lb-Aproximadamente-1-30.jpg?v=637666370378830000",
    id: "1"
},
{
    name: "Banana",
    price: 90,
    img: "https://st.depositphotos.com/1642482/1904/i/450/depositphotos_19049353-stock-photo-fruit.jpg",
    id: "2"
},
{
    name: "Naranja",
    price: 231,
    img: "https://fraganciastudeseo.es/wp-content/uploads/2018/05/Naranja-600x600.jpg",
    id: "3"
},
{
    name: "Pera",
    price: 20,
    img: "https://laopinion.com/wp-content/uploads/sites/3/2015/10/pera.jpg?quality=60&strip=all&w=1196",
    id: "4"
},
{
    name: "Anana",
    price: 400,
    img: "https://granjaus.com/wp-content/uploads/2019/02/AA113.jpg",
    id: "5"
}
]
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
for (const element of products) {
    rendering(element)
    listenerButton(element)
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
    })
    
    
}

