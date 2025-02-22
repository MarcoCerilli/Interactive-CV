document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById("menuBtn");
    const navbar = document.querySelector("nav");
    const darkModeBtn = document.getElementById("darkModeBtn");
    const downloadCVBtn = document.getElementById("downloadCVBtn");
    const menuLinks = document.querySelectorAll("nav ul li a");

    if (menuBtn && navbar) {
        menuBtn.addEventListener("click", function() {
            this.classList.toggle("open"); // Anima il pulsante del menu
            navbar.classList.toggle("show"); // Mostra/nasconde la navbar
        });

        // Chiudi la navbar quando si clicca su un link del menu
        if (menuLinks.length > 0) {
            menuLinks.forEach(link => {
                link.addEventListener("click", () => {
                    navbar.classList.remove("show");
                    menuBtn.classList.remove("open");
                });
            });
        }

        // Chiudi la navbar quando si scrolla
        window.addEventListener("scroll", () => {
            if (navbar.classList.contains("show")) {
                navbar.classList.remove("show");
                menuBtn.classList.remove("open");
            }
        });
    }

    // Modalità scura (toggle dark mode)
    if (darkModeBtn) {
        darkModeBtn.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
        });
    }

    // Scarica il CV
    if (downloadCVBtn) {
        downloadCVBtn.addEventListener("click", function() {
            const link = document.createElement("a");
            link.href = "https://marcocerilli.github.io/Interactive-CV/";
            link.download = "CV_Marco_Cerilli.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
});
