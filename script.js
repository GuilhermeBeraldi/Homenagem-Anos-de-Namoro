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

    const startDate = new Date(2023, 3, 15); // 15/04/2023 (mês é 0-indexado)
    const now = new Date();
    const elapsed = new Date() - startDate;
    
    const years = new Date().getFullYear() - startDate.getFullYear() - 
        (new Date().getMonth() < startDate.getMonth() || 
        (new Date().getMonth() === startDate.getMonth() && new Date().getDate() < startDate.getDate()) ? 1 : 0);
    
    let months = new Date().getMonth() - startDate.getMonth();
    if (months < 0) months += 12;
    if (new Date().getDate() < startDate.getDate()) months--;
    
    let days;
    if (new Date().getDate() >= startDate.getDate()) {
        days = new Date().getDate() - startDate.getDate();
    } else {
        const previousMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 0); // Último dia do mês anterior
        days = previousMonth.getDate() - startDate.getDate() + new Date().getDate();
    }
    
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    
    console.log(`${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos.`);
    

    timerElement.textContent = `${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

setInterval(updateTimer, 1000);
updateTimer();
