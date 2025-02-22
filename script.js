document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById("menuBtn");
    const navbar = document.querySelector("nav");
    const darkModeBtn = document.getElementById("darkModeBtn");
    const downloadCV = document.getElementById("downloadCV");
    const menuLinks = document.querySelectorAll("nav ul li a");

    if (menuBtn && navbar) {
        menuBtn.addEventListener("click", function() {
            this.classList.toggle("open"); // Aggiunge/rimuove la classe per l'animazione
            navbar.classList.toggle("show"); // Mostra/nasconde la navbar
        });

        // Chiudi la navbar quando si clicca su un link del menu
        menuLinks.forEach(link => {
            link.addEventListener("click", () => {
                navbar.classList.remove("show");
                menuBtn.classList.remove("open");
            });
        });

        // Chiudi la navbar quando si scrolla
        window.addEventListener("scroll", () => {
            if (navbar.classList.contains("show")) {
                navbar.classList.remove("show");
                menuBtn.classList.remove("open");
            }
        });
    }

    // Modalità scura
    if (darkModeBtn) {
        darkModeBtn.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
        });
    }

    // Scarica il CV
    if (downloadCV) {
        downloadCV.addEventListener("click", function() {
            const link = document.createElement("a");
            link.href = "https://marcocerilli.github.io/Interactive-CV/CV_Marco_Cerilli.pdf";
            link.download = "CV_Marco_Cerilli.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
});
