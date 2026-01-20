window.addEventListener("load", () => {
    if (window.location.hash === "#projetos") {
        const elemento = document.getElementById("projetos");
        if (elemento) {
            setTimeout(() => {
                elemento.scrollIntoView({ behavior: "smooth" });
            }, 100);
        }
    }
});
