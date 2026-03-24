document.addEventListener("DOMContentLoaded", function() {
    fetch("data/contenido.xml")
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, "application/xml");
            const contenido = document.getElementById("contenido");
            const titulo = xml.getElementsByTagName("titulo")[0].textContent;
            const autor = xml.getElementsByTagName("autor")[0].textContent;
            contenido.innerHTML = `<h2>${titulo}</h2><p>Autor: ${autor}</p>`;
        });
});
