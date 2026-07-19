const data = {

senin:`

<div class="mapel">

<h2>📖 Matematika</h2>

<p>07.00 - 08.00</p>

<span>Bpk. Budi</span>

</div>

<div class="mapel">

<h2>💻 Informatika</h2>

<p>08.00 - 09.00</p>

<span>Bpk. Andi</span>

</div>

`,

selasa:`

<div class="mapel">

<h2>🇬🇧 Bahasa Inggris</h2>

<p>07.00 - 08.00</p>

<span>Ibu Rina</span>

</div>

<div class="mapel">

<h2>⚛ Fisika</h2>

<p>08.00 - 09.00</p>

<span>Bpk. Arif</span>

</div>

`

};

document.getElementById("jadwal").innerHTML=data.senin;

function gantiHari(hari){

document.getElementById("jadwal").innerHTML=data[hari];

}