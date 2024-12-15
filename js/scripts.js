// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    const backToTopLink = document.querySelector("footer a");

    backToTopLink.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Add any additional interactive functionality here.
});
