// Carousel Logic
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel img');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Timer Logic
const timerElement = document.getElementById('timer');
const startDate = new Date('2023-04-15T00:00:00');

function updateTimer() {
    const now = new Date();
    const elapsed = now - startDate;

    const years = Math.floor(elapsed / (365 * 24 * 60 * 60 * 1000));
    const months = now.getMonth() - startDate.getMonth() + (12 * (now.getFullYear() - startDate.getFullYear()));
    const days = Math.floor(elapsed / (24 * 60 * 60 * 1000)) % 30;
    const hours = Math.floor((elapsed / (60 * 60 * 1000)) % 24);
    const minutes = Math.floor((elapsed / (60 * 1000)) % 60);
    const seconds = Math.floor((elapsed / 1000) % 60);

    timerElement.textContent = `${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

setInterval(updateTimer, 1000);
updateTimer();
