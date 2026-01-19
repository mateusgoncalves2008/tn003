let indiceSlide = 0;
mostrarSlide(indiceSlide);

function mudarSlide(n) {
    mostrarSlide((indiceSlide += n));
}

function mostrarSlide(n) {
    let slides = document.getElementsByClassName("slide");

    // Se chegar no fim, volta para o primeiro
    if (n >= slides.length) {
        indiceSlide = 0;
    }

    // Se voltar do primeiro, vai para o último
    if (n < 0) {
        indiceSlide = slides.length - 1;
    }

    // Esconde todos
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("ativo");
    }

    // Mostra o atual
    slides[indiceSlide].classList.add("ativo");
}
