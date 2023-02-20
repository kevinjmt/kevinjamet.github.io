// Check initial viepwort width
document.addEventListener("DOMContentLoaded", checkViewportWidth);

 function checkViewportWidth() {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

    if (document.querySelector('.container-menu')) {
        const elemMenuList = document.querySelector('.container-menu');
        if (vw >= 1025) {
            elemMenuList.classList.add("menu-desktop");
            elemMenuList.classList.remove("menu-mobile");
        }
        else {
            elemMenuList.classList.add("menu-mobile");
            elemMenuList.classList.remove("menu-desktop");
        }
    }
}

// Monitor viepwort width
window.onresize = checkViewportWidth;

// Show/hide fly-out mobile menu -->
// if (document.getElementById('nav-toggle-btn')) {
//     document.getElementById('nav-toggle-btn').addEventListener('click', toggleMobileMenu);
// }

document.body.addEventListener( 'click', function ( event ) {
    if( event.target.id == 'nav-toggle-btn' ) {
        toggleMobileMenu(event);
    };
});


function toggleMobileMenu(event) {
    console.log("got here")
    event.stopPropagation();
    const elHTML = document.querySelector('html');
    const elNav = document.querySelector('nav');
    const navWrapper = document.querySelector(".links-wrapper");

    if (navWrapper.classList.contains("active")) {
        navWrapper.setAttribute("aria-expanded", "false");
        navWrapper.setAttribute("aria-label", "menu");
        navWrapper.classList.remove("active");
        elHTML.classList.remove('no-scroll');
        elNav.classList.remove('menu-on-scroll');
    }

    else {
        navWrapper.classList.add("active");
        navWrapper.setAttribute("aria-label", "close menu");
        navWrapper.setAttribute("aria-expanded", "true");
        elHTML.classList.add('no-scroll');
        elNav.classList.add('menu-on-scroll');
    }
}


// On-scroll colours
window.addEventListener("scroll", scrollCheckColors);

function scrollCheckColors() {

    if (document.querySelector('nav')) {
        window.onscroll = function() {swapMenuStyle()};
    }

    if (document.querySelector('nav')) {
        const el_menu = document.querySelector('nav');
        const el_menu_onscroll = el_menu.offsetTop +300;
    }
}

function swapMenuStyle() {
    const el_menu = document.querySelector('nav');
    const el_menu_onscroll = el_menu.offsetTop +300;
	if ( window.pageYOffset > el_menu_onscroll) {
		el_menu.classList.add("menu-on-scroll");
	}
    else {
        el_menu.classList.remove("menu-on-scroll")
	}
}

// Check initial menu scroll position
if (document.querySelector('nav')) {
    document.addEventListener("DOMContentLoaded", checkMenuScrollPosition);
}

function checkMenuScrollPosition() {
    const y = window.scrollY;
    if (y === 0) {
        const el_menu = document.querySelector('nav');
        el_menu.classList.remove("menu-on-scroll")
    }
}

// Content reveal for production in lunevedy.js
window.addEventListener("scroll", scrollFigureRevealUp);
window.addEventListener("scroll", scrollFigureRevealDown);
window.addEventListener("scroll", scrollFigureRevealLeft);
window.addEventListener("scroll", scrollFigureRevealRight);
window.addEventListener("scroll", scrollFigureFadeIn);
window.addEventListener("scroll", scrollFigureScaleIn);

function scrollFigureRevealUp() {

    if (document.querySelectorAll(".reveal-slide-up")) {
        const reveals = document.querySelectorAll(".reveal-slide-up");
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }
}

function scrollFigureRevealDown() {

    if (document.querySelectorAll(".reveal-slide-down")) {
        const reveals = document.querySelectorAll(".reveal-slide-down");
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }
}

function scrollFigureRevealLeft() {

    if (document.querySelectorAll(".reveal-slide-from-left")) {
        const reveals = document.querySelectorAll(".reveal-slide-from-left");
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }
}

function scrollFigureRevealRight() {

    if (document.querySelectorAll(".reveal-slide-from-right")) {
        const reveals = document.querySelectorAll(".reveal-slide-from-right");
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }
}

function scrollFigureFadeIn() {
    const reveals = document.querySelectorAll(".reveal-fade-in");
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

function scrollFigureScaleIn() {
    const reveals = document.querySelectorAll(".reveal-scale-in");
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

