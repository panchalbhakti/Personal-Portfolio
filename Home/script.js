document.getElementById('hamburger').addEventListener('click', function() {
    var navbarMenu = document.getElementById('navbarMenu');
    if (navbarMenu.style.display === 'flex') {
        navbarMenu.style.display = 'none';
    } else {
        navbarMenu.style.display = 'flex';
    }
});