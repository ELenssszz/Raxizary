const popup=document.getElementById("popup");

const popupImg=document.getElementById("popup-img");

function bukaGambar(src){

popup.style.display="flex";

popupImg.src=src;

}

document.querySelector(".close").onclick=function(){

popup.style.display="none";

}

popup.onclick=function(e){

if(e.target===popup){

popup.style.display="none";

}

}