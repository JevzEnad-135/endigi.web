const body = document.body;
const openDrawer = document.getElementById("open-drawer");
const closeDrawer = document.getElementById("close-drawer");
const naval = document.getElementById("nav-overlay");

function openNav() {
    body.classList.add('nav-open');
}

function closeNav() {
    body.classList.remove('nav-open');
}

openDrawer.addEventListener("click", openNav);
closeDrawer.addEventListener("click", closeNav);
naval.addEventListener("click", closeNav);