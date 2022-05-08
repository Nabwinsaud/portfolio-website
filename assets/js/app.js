// toggle hamburger
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const navLink = document.querySelectorAll('.navlink');
navLink.forEach(event => {
    event.addEventListener('click', () => {
        hamburger.classList.remove('active');
        menu.classList.remove('active');
    })
})

hamburger.addEventListener('click', () => {

    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
})

// reavel site on scroll

function reveal() {
    let revealAfterScroll = document.querySelectorAll('.reveal-after-scroll');
    for (let i = 0; i < revealAfterScroll.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = revealAfterScroll[i].getBoundingClientRect().top;
        let revealPoint = 50;

        if (revealTop < windowHeight - revealPoint) {
            revealAfterScroll[i].classList.add('active');
        }

    }

}

window.addEventListener('scroll', reveal);