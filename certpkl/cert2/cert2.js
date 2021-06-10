// Certificate Generator
// Video: https://youtu.be/dag5_oJB7Mg
// Project: https://github.com/barajasss/yt-certificate-generator
// Copyright 2020 Baraja Swargiary (https://github.com/barajasss)







































































































































































































const canvas = document.getElementById('canvas2');
const ctx = canvas.getContext('2d');
const nama = document.getElementById('namalengkap');
const tempattanggallahir = document.getElementById('tempattanggallahir');
const nis = document.getElementById('nis');
const tempatpkl = document.getElementById('tempatpkl');
const predikat = document.getElementById('predikat');
const tanggalbuat = document.getElementById('tanggalbuat')
const guru = document.getElementById('gurupembimbing');
const downloadBtn = document.getElementById('downloadbtn2');

const image = new Image()
image.src = './Certificate Design 2.png';
image.onload = function () {
	drawImage()
}

function drawImage() {
	ctx.drawImage(image, 0, 0, canvas2.width, canvas2.height);
	ctx.font = '38px garamond bold'
	ctx.fillStyle = '#663333'
	ctx.textAlign='center';
    ctx.fillText(nama.value, 500, 260);

	ctx.font = '38px garamond bold'
	ctx.fillText(tempattanggallahir.value, 282, 325)

	ctx.font = '38px garamond bold'
	ctx.fillText(nis.value, 750, 325)

	ctx.font = '18px garamond bold'
	ctx.fillText(tempatpkl.value, 480, 450)

	ctx.font = '18px garamond bold'
	ctx.fillText(predikat.value, 850, 450)

	ctx.font = '15px garamond bold'
	ctx.fillText(tanggalbuat.value, 820, 522)

	ctx.font = '20px garamond bold'
	ctx.fillText(guru.value, 309, 653)
}

nama.addEventListener('input', function () {
	drawImage()
})

tempattanggallahir.addEventListener('input', function () {
	drawImage()
})

nis.addEventListener('input', function () {
	drawImage()
})

tempatpkl.addEventListener('input', function () {
	drawImage()
})

predikat.addEventListener('input', function () {
	drawImage()
})

tanggalbuat.addEventListener('input', function () {
	drawImage()
})

guru.addEventListener('input', function () {
	drawImage()
})

downloadBtn.addEventListener('click', function () {
	downloadBtn.href = canvas.toDataURL('image/png')
	downloadBtn.download = 'Certificate-' + nama.value
})