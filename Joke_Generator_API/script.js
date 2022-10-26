const btn = document.querySelector(".btn")
const joke = document.querySelector(".joke")

document.addEventListener("DOMContentLoaded", getJoke)
btn.addEventListener("click", getJoke)

function getJoke() {
    fetch("https://api.chucknorris.io/jokes/random")
        .then((response) => response.json())
        .then((data) => (console.log(data), (joke.textContent = data.value)))
}