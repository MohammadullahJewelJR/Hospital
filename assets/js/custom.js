function menuToggle() {
    const menuIcon = document.querySelector(".menu-icon");
    const toggleMenu = document.querySelector("#toggle-nav");
    menuIcon.classList.toggle("active");
    toggleMenu.classList.toggle("active");
}
function accordionToggle() {
    const accorToggle = document.querySelector(".accrodion-icon");
    const accorContent = document.querySelector(".accordion-box");
    accorToggle.classList.toggle("active");
    accorContent.classList.toggle("active");
}

window.addEventListener('scroll', function(){
    var scroll = document.querySelector('.scrollToTop');
    scroll.classList.toggle('active', window.scrollY > 500);
})

function scrollButton() {
    window.scrollTo({
        top : 0,
        behavior : 'smooth'
    })
}