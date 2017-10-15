/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var precio = 0;
var find = false;
var carrito = {
    portatil1: 0,
    portatil2: 0,
    portatil3: 0
};
var precios = {
    portatil1: 795,
    portatil2: 1199,
    portatil3: 899
};
var divCompra;

function comprar(id) {
    precio += precios[id];
    alert("Key is " + id + ", value is " + precios[id] + " precio TOTAL: " + precio);

    alert(carrito[id]);

    if (carrito[id] === 0) {
        divCompra = document.createElement("div");
        divCompra.setAttribute("id", id);
        divCompra.innerHTML = '<img src="./img/' + id + '.png" alt="' + id + '"/>';
        document.getElementById("contenedorCarrito").appendChild(divCompra);
        carrito[id] += 1;
    } else if (carrito[id] === 1) {
        pPrecio = document.createElement("p");
        alert("entro");
        pPrecio.className = "unidades" + id;
        document.getElementById("contenedorCarrito").appendChild(pPrecio);
    }
    pPrecio.innerHTML = carrito[id] += 1;
}




