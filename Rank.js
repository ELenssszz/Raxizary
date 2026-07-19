const Petarung = [

{
    Julukan:"Rank 1",
    foto:"Rank1.png",
    Nama:"Nesha",
    Lahir:"Surabaya",
    umur:"20",
    kemampuan:"Pengguna Elionrex",
    point:"9950"
},

{
    Julukan:"Rank 2",
    foto:"Rank2.png",
    Nama:"Zakira",
    Lahir:"Malang",
    umur:"19",
    kemampuan:"Sword Master",
    point:"9650"
},

{
    Julukan:"Rank 3",
    foto:"Rank3.png",
    Nama:"Raysha",
    Lahir:"Jakarta",
    umur:"18",
    kemampuan:"Mage",
    point:"9320"
},

{
    Julukan:"Rank 4",
    foto:"Rank4.png",
    Nama:"Tiwi",
    Lahir:"Bandung",
    umur:"21",
    kemampuan:"Assassin",
    point:"9015"
},

{
    Julukan:"Rank 5",
    foto:"Rank5.png",
    Nama:"Yura",
    Lahir:"Semarang",
    umur:"20",
    kemampuan:"Archer",
    point:"8720"
}

]

function bukaProfil(i){

document.getElementById("popup").style.display="flex";

document.getElementById("foto").src=Petarung[i].foto;

document.getElementById("julukan").textContent = Petarung[i].Julukan;
document.getElementById("lahir").textContent = Petarung[i].Lahir;
document.getElementById("nama").textContent = Petarung[i].Nama;
document.getElementById("umur").innerHTML=Petarung[i].umur;
document.getElementById("kemampuan").innerHTML=Petarung[i].kemampuan;
document.getElementById("point").innerHTML=Petarung[i].point;

}

document.querySelector(".close").onclick=function(){

document.getElementById("popup").style.display="none";

}

window.onclick=function(e){

if(e.target==document.getElementById("popup")){

document.getElementById("popup").style.display="none";

}

}


function lihatGambar(){

    const gambar = document.getElementById("foto").src;

    document.getElementById("fullImage").src = gambar;

    document.getElementById("imagePopup").style.display = "flex";
}

function tutupGambar(){
    document.getElementById("imagePopup").style.display = "none";
}

const imagePopup = document.getElementById("imagePopup");

imagePopup.addEventListener("click", function(e){

    if(e.target === imagePopup){
        tutupGambar();
    }

});

