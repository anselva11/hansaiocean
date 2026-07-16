/* ======================================================
   LOADING SCREEN
====================================================== */
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
        
        // Start typing effect after loader disappears
        typeEffect();
    }, 1500); // Artificial delay to show the nice loader
});

/* ======================================================
   CUSTOM CURSOR / MOUSE GLOW
====================================================== */
const cursorGlow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
});

// Hide glow on leave
document.addEventListener('mouseleave', () => {
    cursorGlow.style.opacity = '0';
});
document.addEventListener('mouseenter', () => {
    cursorGlow.style.opacity = '1';
});


/* ======================================================
   NAVBAR & MOBILE MENU
====================================================== */
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close Mobile Menu on Link Click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

/* ======================================================
   SMOOTH SCROLLING
====================================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});

/* ======================================================
   SCROLL REVEAL ANIMATION (FADE IN)
====================================================== */
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}
window.addEventListener('scroll', reveal);
reveal(); // Trigger on load

/* ======================================================
   STATISTICS COUNTER
====================================================== */
const counters = document.querySelectorAll('.counter');
let counterStarted = false;

function startCounters() {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 2000; // ms
        const increment = target / (duration / 16); // 60fps
        
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.innerText = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });
}

// Start counter when section is in view
const statsSection = document.querySelector('.statistics');
window.addEventListener('scroll', () => {
    if(!statsSection) return;
    const sectionPos = statsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;
    
    if (sectionPos < screenPos && !counterStarted) {
        startCounters();
        counterStarted = true;
    }
});

/* ======================================================
   BUTTON RIPPLE EFFECT
====================================================== */
const buttons = document.querySelectorAll('.ripple');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        let x = e.clientX - e.target.getBoundingClientRect().left;
        let y = e.clientY - e.target.getBoundingClientRect().top;
        
        let ripples = document.createElement('span');
        ripples.classList.add('ripple-effect');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);
        
        setTimeout(() => {
            ripples.remove();
        }, 600);
    });
});

/* ======================================================
   SCROLL TO TOP BUTTON
====================================================== */
const scrollTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

/* ======================================================
   TYPING EFFECT FOR HERO
====================================================== */
const typingElement = document.querySelector('.typing-text');
const textToType = "Building The Future \n Across The Oceans";
let charIndex = 0;

function typeEffect() {
    if(!typingElement) return;
    
    if (charIndex < textToType.length) {
        if(textToType.charAt(charIndex) === '\n') {
             typingElement.innerHTML += '<br>';
        } else {
            typingElement.innerHTML += textToType.charAt(charIndex);
        }
        charIndex++;
        setTimeout(typeEffect, 100);
    }
}
// Note: initial innerHTML of .typing-text should be empty if we want full type effect.
// Currently it has text. I will clear it before starting.
if(typingElement) {
    typingElement.innerHTML = '';
}

/* ======================================================
   SET CURRENT YEAR IN FOOTER
====================================================== */
const yearSpan = document.getElementById('year');
if(yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}
