const ham = document.getElementById('ham');
const nav_links = document.getElementById('nav_links');

ham.addEventListener('click',() => {
    nav_links.classList.toggle('show')
    console.log("sdf");
});