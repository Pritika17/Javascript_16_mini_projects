const btn = document.querySelector("#button");


const randomColor = () => {
    let val = "0123456789ABCDEF";
    let symbol = "#";
    for (let i = 0; i < 6; i++) {
        symbol = symbol + val[Math.floor(Math.random() * 16)];
    }
    return symbol;
}

function randomColorChanger() {
    document.querySelector("#canvas").style.backgroundColor = randomColor()
}

btn.addEventListener("click", randomColorChanger)
