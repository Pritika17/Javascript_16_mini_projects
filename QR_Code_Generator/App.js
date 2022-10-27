const main = document.querySelector(".main");
const qrInput = main.querySelector(".form input")
const qrImg = main.querySelector(".qr-code img")

const generateBtn = main.querySelector(".form button");


generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim()
    if(!qrValue) return; // if the input is empty return from here
    generateBtn.innerText = "Generating QR Code...";

    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;

    qrImg.addEventListener("load", () => {
        main.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    })
    
})

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value) {
        main.classList.remove("active");
    }
})