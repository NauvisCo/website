const navbar = document.querySelector('.navbar-fixed-top');
window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};