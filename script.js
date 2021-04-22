let input = document.querySelector('input');
let button = document.querySelector('button');

let qrcode = new QRCode(document.querySelector('#qrcode'), {
    text: "Grace",
    width: 230,
    height: 230,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});

button.addEventListener('click', () => {
    let inputValue = input.value;
    qrcode.makeCode(inputValue);
})


//download qr code image

var barcodeCtrl;
$(function () {
    $("#barcode").ghBarcode({ symbologyType: "qrbarcode", xDimension: 12, });
    barcodeCtrl = $("#barcode").data("ghBarcode");
});
  
function Download(link, canvasId, filename){
    link.href = document.querySelector(canvasId).toDataURL();
    link.download = filename;
}
   
    document.getElementById('download').addEventListener('click', function () {
    Download(this, '#barcode canvas', 'Barcode.png');
}, false);
   
