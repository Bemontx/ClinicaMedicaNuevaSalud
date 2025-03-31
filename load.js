// cargar documento

document.addEventListener("DOMContentLoaded", function () {
    let navbarContainer = document.getElementById("navbar");
    let footerContainer = document.getElementById("footer");

    let basePath = window.location.pathname.includes("/plantilla/") ? "../" : "./";

    // Cargar Navbar
    if (navbarContainer) {
        fetch(basePath + "navbar.html")
            .then(response => {
                if (!response.ok) throw new Error("Error al cargar navbar");
                return response.text();
            })
            .then(data => {
                navbarContainer.innerHTML = data;

                // Ajustar enlaces del navbar
                let homeLink = navbarContainer.querySelector("a[href='./index.html']");
                if (homeLink) {
                    homeLink.setAttribute("href", basePath + "index.html");
                }

                let links = navbarContainer.querySelectorAll("a");
                links.forEach(link => {
                    let href = link.getAttribute("href");
                    if (href && !href.startsWith("http")) {
                        link.setAttribute("href", basePath + href);
                    }
                });
            })
            .catch(error => console.error("Error al cargar el navbar:", error));
    } else {
        console.error("No se encontró el elemento #navbar en el HTML.");
    }

    // Cargar Footer
    if (footerContainer) {
        fetch(basePath + "footer.html")
            .then(response => {
                if (!response.ok) throw new Error("Error al cargar el footer");
                return response.text();
            })
            .then(data => {
                footerContainer.innerHTML = data;
            })
            .catch(error => console.error("Error al cargar el footer:", error));
    } else {
        console.error("No se encontró el elemento #footer en el HTML.");
    }
});

