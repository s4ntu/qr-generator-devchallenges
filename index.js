const pageOne = document.getElementById('page-one')
const pageTwo = document.getElementById('page-two')

function generateQRCode() {
    var urlInput = document.getElementById('urlInput').value;
    var qrcode = new QRCode(document.getElementById('qrcode'), {
        text: urlInput,
        width: 154,
        height: 154
    });
    pageOne.classList.toggle('hidden')
    pageTwo.classList.toggle('hidden')
}

function download(){
    var contenedorQRCode = document.getElementById('qrcode');

    var imagen = contenedorQRCode.querySelector('img');
    var imagenSrc = imagen.src;

    var enlaceDescarga = document.createElement('a');
    enlaceDescarga.href = imagenSrc;
    enlaceDescarga.download = 'mi_imagen.jpg';

    document.body.appendChild(enlaceDescarga);
    enlaceDescarga.click();
    document.body.removeChild(enlaceDescarga);
}

function share(){
    navigator.clipboard.writeText(urlInput.value)
}
