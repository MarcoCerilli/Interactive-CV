document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById("menuBtn");
    const navbar = document.querySelector("nav");
    const menuFixedBtn = document.getElementById("menuFixedBtn"); // Pulsante fisso
    const darkModeBtn = document.getElementById("darkModeBtn");
    const downloadCVBtn = document.getElementById("downloadCVBtn");
    const menuLinks = document.querySelectorAll("nav ul li a");

    function toggleMenu() {
        menuBtn.classList.toggle("open");
        navbar.classList.toggle("show");
    }

    if (menuBtn && navbar) {
        menuBtn.addEventListener("click", function(event) {
            toggleMenu();
            event.stopPropagation(); // Impedisce la chiusura immediata
        });

        // Pulsante fisso per aprire il menu
        if (menuFixedBtn) {
            menuFixedBtn.addEventListener("click", function() {
                toggleMenu();
            });
        }

        // Chiude la navbar quando si clicca su un link del menu
        menuLinks.forEach(link => {
            link.addEventListener("click", () => {
                navbar.classList.remove("show");
                menuBtn.classList.remove("open");
            });
        });

        // Chiude la navbar quando si clicca fuori
        document.addEventListener("click", function(event) {
            if (!navbar.contains(event.target) && !menuBtn.contains(event.target) && !menuFixedBtn.contains(event.target)) {
                navbar.classList.remove("show");
                menuBtn.classList.remove("open");
            }
        });

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
