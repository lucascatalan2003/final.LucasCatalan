 

const  contenedor = document.querySelector("#productos-container");

const renderServicios = (arr) => {
  contenedor.innerHTML = "";
  let html;
  for (const item of arr) {
    const { id, nombre, img, precio } = item;
    html = `  
        <div class="card">
      		<div class="card-image">
        	<img src="./img/productos/${img}">
        	<span class="card-title">${nombre}</span>
       </div>
     	 <div class="card-content"> 
     		<p>$${precio}</p>
      </div>
      <div class="card-action">
      <button>Agregar al carrito</button>
      </div>
     </div>
     `;
     contenedor.innerHTML += html;
  }
};



 fetch('./db/db.json')
 .then(response=> response.json())
 .then(data=>{
   console.log(data);
   serviciosDB=data
   console.log(serviciosDB);
   renderServicios(serviciosDB)
 });


let bicicletasDB = []

const API_URL = "../db/db.json"

const getData = async (url) => {
  const response = await fetch(url);
  const data  =  await response.json();
  bicicletasDB = data;
  renderServicios(bicicletasDB)
}