/* ==================== toggle icon navbar ======================*/
let nemuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/* ==================== scroll section active link ======================*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* ==================== sticky navbar ======================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

     /* ==================== remove toggle icon and navbar ======================*/
     menuIcon.classList.remove('fa-xmark');
     navbar.classList.remove('active');
};

/* ==================== scroll reveal ======================*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'buttom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'rigt' });

/* ==================== typed js ======================*/
const typed = new Typed('.multiple-text'. {
    strings: ['Frontend Developer', 'Web Designer', 'Youtuber'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop:true,
});