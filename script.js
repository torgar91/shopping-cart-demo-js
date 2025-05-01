const productos = {
    martillos : {

        cantidad: 0,
        icono: "./assets/iconos/Copia de martillo.svg",
        salida: document.getElementById("contenedor-martillo"),
        btnAdd: document.getElementById("btn-add-martillo"),
        btnRemove: document.getElementById("btn-remove-martillo")

    },
    brochas: {

        cantidad: 0,
        icono: "./assets/iconos/Copia de brocha.svg",
        salida: document.getElementById("contenedor-brocha"),
        btnAdd: document.getElementById("btn-add-brocha"),
        btnRemove: document.getElementById("btn-remove-brocha")

    },
    
    llaves: {

        cantidad: 0,
        icono: "./assets/iconos/Copia de llave.svg",
        salida: document.getElementById("contenedor-llave"),
        btnAdd: document.getElementById("btn-add-llave"),
        btnRemove: document.getElementById("btn-remove-llave")

    },

    troncos: {

        cantidad: 0,
        icono: "./assets/iconos/Copia de tronco.svg",
        salida: document.getElementById("contenedor-tronco"),
        btnAdd: document.getElementById("btn-add-tronco"),
        btnRemove: document.getElementById("btn-remove-tronco")

    }
}

function actualizar (nombreProducto,operacion){

    if (operacion === "sumar"){
        productos[nombreProducto].cantidad ++ 
    } else if (operacion === "restar" &&  productos[nombreProducto].cantidad > 0) {
        productos[nombreProducto].cantidad --
    }

    const producto = productos[nombreProducto];
    const cantidad = producto.cantidad;
    const icono = producto.icono;
    

    producto.salida.innerHTML = "cantidad: "+ cantidad + " " + 
    ("<img src='" + icono + "' class='icono-cesta'>").repeat(cantidad)

    actualizarContadorCarrito();


}

for (let nombre in productos) {
    const producto = productos[nombre];
  
    producto.btnAdd.addEventListener("click", () => actualizar(nombre, "sumar"));
    producto.btnRemove.addEventListener("click", () => actualizar(nombre, "restar"));
  }
  
  function actualizarContadorCarrito() {
    let total = 0;
    for (let nombre in productos) {
      total += productos[nombre].cantidad;
    }
    document.getElementById("contador-carrito").textContent = total;
  }

  document.querySelector(".carrito").addEventListener("click", () => {
    const resumen = document.getElementById("resumen-carrito");
    resumen.classList.toggle("oculto");
  
    let contenido = "<h4>Tu carrito:</h4><ul>";
    let total = 0;
  
    for (let nombre in productos) {
      const prod = productos[nombre];
      if (prod.cantidad > 0) {
        const precioUnitario = obtenerPrecio(nombre); // puedes hacerlo con un objeto
        const subtotal = precioUnitario * prod.cantidad;
        total += subtotal;
        contenido += `<li>${nombre}: ${prod.cantidad} × ${precioUnitario}€ = ${subtotal}€</li>`;
      }
    }
  
    contenido += `</ul><strong>Total: ${total} €</strong>`;
    resumen.innerHTML = contenido;
  });

  const precios = {
    martillos: 12,
    brochas: 10,
    llaves: 8,
    troncos: 15
  };
  
  function obtenerPrecio(nombre) {
    return precios[nombre];
  }
  
   
  
   
