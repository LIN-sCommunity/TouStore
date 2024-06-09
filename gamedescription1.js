// JavaScript for toggling menu
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.style.display = menu.style.display === 'none' || menu.style.display === '' ? 'flex' : 'none';
}

// JavaScript for slider functionality
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = 'none';
        slide.classList.remove('active');
    });
    slides[index].style.display = 'block';
    slides[index].classList.add('active');
}

function changeSlide(direction) {
    slideIndex += direction;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlide(slideIndex);
}

// Initialize first slide
showSlide(slideIndex);

// Automatically change slide every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);

// JavaScript for toggling menu
function toggleMenu() {
    const menu = document.querySelector('.menu');
    const homeContact = document.querySelector('.home-contact');

    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'flex';
        homeContact.style.justifyContent = 'flex-end'; // Menggeser tombol home dan contact ke kanan
    } else {
        menu.style.display = 'none';
    }
}
