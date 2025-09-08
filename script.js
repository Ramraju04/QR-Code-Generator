const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');

let size = parseInt(sizes.value);

generateBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (qrText.value.trim().length > 0) {
    generateQRCode();
  } else {
    alert("Please enter text or URL to generate the QR code.");
  }
});

sizes.addEventListener('change', (e) => {
  size = parseInt(e.target.value);
  if (qrText.value.trim().length > 0) {
    generateQRCode();
  }
});

function generateQRCode() {
  qrContainer.innerHTML = "";
  downloadBtn.style.display = "none";

  const qr = new QRCode(qrContainer, {
    text: qrText.value,
    width: size,
    height: size,
    colorLight: "#ffffff",
    colorDark: "#3a3d55"
  });

  setTimeout(() => {
    let img = qrContainer.querySelector('img');
    let canvas = qrContainer.querySelector('canvas');
    if (img) {
      downloadBtn.href = img.src;
      downloadBtn.style.display = "block";
    } else if (canvas) {
      downloadBtn.href = canvas.toDataURL();
      downloadBtn.style.display = "block";
    }
  }, 300);
}
