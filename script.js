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
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            sections.forEach(section => section.classList.remove('active-section'));
            targetSection.classList.add('active-section');
        });
    });
});

// Orice alt cod JavaScript necesar
