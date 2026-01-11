/* MENU SHOW Y HIDDEN */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('active')
    })
}

/* MENY HIDDEN */
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('active')
    })
}

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav-link, we remove the show-menu class
    navMenu.classList.remove('active')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
            // Optional: Add active styling in CSS if needed, currently reusing standard link styles
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').style.color = 'var(--first-color)';
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').style.color = 'var(--title-color)';
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* CHANGE BACKGROUND HEADER */ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/* SCROLL REVEAL ANIMATION */
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: Stop observing once revealed if you want it to animate only once
            // observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

const scrollElements = document.querySelectorAll('.scroll-reveal');
scrollElements.forEach((el) => observer.observe(el));


/* CUSTOM CURSOR */
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', function(e) {
    const posX = e.clientX;
    const posY = e.clientY;

    // Dot follows immediately
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Outline follows with delay (handled by CSS transition: width 0.2s, etc... need to use animate for position)
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Interactive elements hover effect
const interactables = document.querySelectorAll('a, button, .project-card, .skills-area');

interactables.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorOutline.style.width = '50px';
        cursorOutline.style.height = '50px';
        cursorOutline.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    });
    el.addEventListener('mouseleave', () => {
        cursorOutline.style.width = '30px';
        cursorOutline.style.height = '30px';
        cursorOutline.style.backgroundColor = 'transparent';
    });
});
