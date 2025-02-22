
document.getElementById("darkModeBtn").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    console.log(document.body.classList);  
});

document.getElementById("downloadCV").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = "https://marcocerilli.github.io/Interactive-CV/CV_Marco_Cerilli.pdf";
    link.download = "CV_Marco_Cerilli";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
