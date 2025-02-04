
const addEventOnElement = function(elements, eventType, callback) {
    elements.forEach((element) => {
        element.addEventListener(eventType, callback);
    })
}

// Navbar

const navbar = document.querySelector(".navbar");
const navToggleBtn = document.querySelector(".nav-open-btn");
const overlay = document.querySelector(".overlay");

const toggleNavbar = function() {
    navbar.classList.toggle('active');
    navToggleBtn.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('nav-active')
}

elementArray = [navbar, navToggleBtn]

addEventOnElement(elementArray, 'click', toggleNavbar);

// Parallax

const parallaxElement = document.querySelectorAll('[data-parallax]');

window.addEventListener('mousemove', event => {
    for(let i = 0; i < parallaxElement.length; i++) {
        const movementX = (event.clientX / window.innerWidth) * Number(parallaxElement[i].dataset.parallaxSpeed);
        const movementY = (event.clientY / window.innerHeight) * Number(parallaxElement[i].dataset.parallaxSpeed);

        parallaxElement[i].animate({
            transform: `translate(${movementX}px, ${movementY}px)`
        }, {duration: 500, fill: 'forwards'})
    }
})



