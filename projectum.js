const urlParams = new URLSearchParams(window.location.search);
const slideInicial = urlParams.get("slide");

let indiceSlide = slideInicial ? parseInt(slideInicial) : 0;

mostrarSlide(indiceSlide);

function mudarSlide(n) {
    mostrarSlide((indiceSlide += n));
}

function mostrarSlide(n) {
    let slides = document.getElementsByClassName("slide");
    let botaoAnterior = document.querySelector(".anterior");
    let botaoProximo = document.querySelector(".proximo");

    if (n >= slides.length) {
        indiceSlide = slides.length - 1;
    }
    if (n < 0) {
        indiceSlide = 0;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("ativo");
    }

    if (slides[indiceSlide]) {
        slides[indiceSlide].classList.add("ativo");
    }

    if (indiceSlide === 0) {
        botaoAnterior.style.display = "none";
    } else {
        botaoAnterior.style.display = "block";
    }

    if (indiceSlide === slides.length - 1) {
        botaoProximo.style.display = "none";
    } else {
        botaoProximo.style.display = "block";
    }
}
