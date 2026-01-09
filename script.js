const menuBtn = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("close-btn");
const navLinks = document.getElementById("link-nav");

// Abre o menu
if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.add("active");
    });
}

// Fecha o menu pelo botão X
if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
}

// Fecha o menu ao clicar em qualquer link
navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
