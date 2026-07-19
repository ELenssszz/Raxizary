fetch("Prajurit.json")

.then(res=>res.json())

.then(data=>{

const list=document.getElementById("Vero-list");

data.forEach(Vero=>{

list.innerHTML +=`

<div class="card">

<img src="${Vero.foto}">

<h2>${Vero.nama}</h2>

<p>${Vero.mapel}</p>

<span>${Vero.wali}</span>

</div>

`;

});

});