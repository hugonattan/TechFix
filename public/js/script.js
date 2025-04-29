const toggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const authLinks = document.getElementById('auth-links');

toggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    authLinks.classList.toggle('show');
});
