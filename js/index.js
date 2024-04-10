//const contenedorTarjetas = document.querySelector("#productos-container");

/** Crea las tarjetas de productos teniendo en cuenta la lista en bicicletas.js */
// const crearTarjetasProductosInicio = (arr) => {
//   contenedorTarjetas.innerHTML = "";
//     let nuevaBicicleta;
//     for (const item of arr){
//       const {  img, nombre, precio, id } = item;
//       nuevaBicicleta = `
//       <div class="tarjeta-index">
//     <img src="../img/productos${img}">
//     <h3>${nombre}</h3>
//     <p class="precio">$${precio}</p>
//     <button id="${id}">Agregar al carrito</button>`
//     contenedorTarjetas.appendChild(nuevaBicicleta);
//     nuevaBicicleta.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto))
//     contenedorTarjetas.innerHTML += nuevaBicicleta;
//   }};

const contenedorTarjetas = document.getElementById("productos-container");

/** Crea las tarjetas de productos teniendo en cuenta la lista en bicicletas.js */
function crearTarjetasProductosInicio(productos){
  productos.forEach(producto => {
    const nuevaBicicleta = document.createElement("div");
    nuevaBicicleta.classList = "tarjeta-index"
    nuevaBicicleta.innerHTML = `
    <img src="../img/productos/${producto.id}.jpg" alt="Bicicleta 1">
    <h3>${producto.nombre}</h3>
    <p class="precio">$${producto.precio}</p>
    <button>Agregar al carrito</button>`
    contenedorTarjetas.appendChild(nuevaBicicleta);
    nuevaBicicleta.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto))
  });
}
// crearTarjetasProductosInicio(bicicletas);

let bicicletasDB = []

// fetch('./db/db.json')
// .then(response=> response.json())
// .then(data=>{
//   console.log(data);
//   serviciosDB=data
//   console.log(serviciosDB);
//   crearTarjetasProductosInicio(bicicletasDB)
// });

const API_URL = ("../db/db.json")

const getData = async (url) => {
 const response  = await fetch(url);
 const data  =  await response.json();
 bicicletasDB = data;
 console.log(bicicletasDB);
 crearTarjetasProductosInicio(bicicletasDB)
}
getData(API_URL)

