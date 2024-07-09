document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");
    const mainContent = document.getElementById("main-content");

    // Add event listener to each navigation link
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetPage = this.getAttribute("href");
            loadPage(targetPage);
        });
    });

    // Function to load page content
    function loadPage(page) {
        fetch(page)
            .then(response => response.text())
            .then(html => {
                mainContent.innerHTML = html;
                slideIn(mainContent);
            })
            .catch(error => console.log("Error loading page: ", error));
    }

    // Function to slide in content
    function slideIn(element) {
        element.style.opacity = 0;
        element.style.transform = "translateY(20px)";
        element.style.transition = "opacity 0.3s, transform 0.3s";

        setTimeout(() => {
            element.style.opacity = 1;
            element.style.transform = "translateY(0)";
        }, 100);
    }
});
