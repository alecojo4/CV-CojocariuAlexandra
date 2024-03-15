window.onscroll = function() {
    let header = document.getElementById("header");
    if (window.pageYOffset > 100) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
};

document.querySelectorAll('nav a').forEach(link => {
    link.onclick = function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    };
});

// Orice alt cod JavaScript necesar
