let modal1 = document.getElementById("modal1")
let modal2 = document.getElementById("modal2")
let modal3 = document.getElementById("modal3")
let modal4 = document.getElementById("modal4")

const open = (e) => {
    switch (e.target.id) {
        case "card1__btn": modal1.style.display = "flex"; break;
        case "card2__btn": modal2.style.display = "flex"; break;
        case "card3__btn": modal3.style.display = "flex"; break;
        case "card4__btn": modal4.style.display = "flex"; break;
    }
}

const close = (e) => {
    if (e.target.classList.contains("modal__background")) {
        e.target.style.display = "none"
    }
}

window.addEventListener("click", (e) => open(e))
window.addEventListener("click", (e) => close(e))