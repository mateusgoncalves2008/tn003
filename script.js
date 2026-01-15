const menuBtn = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("close-btn");
const navLinks = document.getElementById("link-nav");

menuBtn.addEventListener("click", () => {
    navLinks.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navLinks.classList.remove("active");
});

navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
