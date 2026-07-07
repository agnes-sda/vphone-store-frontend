console.log("About Us page loaded.");
const headerBg = document.querySelector('.header-bg');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        headerBg.classList.add('show');
    } else {
        headerBg.classList.remove('show');
    }
});
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
