const nav_icon = document.getElementById('nav_icon');
const nav_links = document.getElementById('nav_links');

nav_icon.addEventListener('click',() => {
    nav_links.classList.toggle('show_links')
});