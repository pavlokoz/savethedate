// Таймер зворотнього відліку
const weddingDate = new Date("May 25, 2025 14:00:00").getTime();
const timerElement = document.getElementById("timer");

function updateTimer() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        timerElement.innerHTML = "00:00:00:00";
        clearInterval(countdownInterval);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    timerElement.innerHTML = 
        `${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Запуск таймера
const countdownInterval = setInterval(updateTimer, 1000);
updateTimer();

// Паралакс-ефект з оптимізацією для iPhone
function isMobileDevice() {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

document.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');

    if (!isMobileDevice() && scrolled <= window.innerHeight) {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
    
        if (!isMobileDevice() && scrolled <= window.innerHeight) {
            const initialOffset = -450; // точно відповідає CSS
            hero.style.backgroundPositionY = `${initialOffset - (scrolled)}px`;
        }
    }
});

// Прокрутка вниз
document.querySelector('.scroll-btn').addEventListener('click', function() {
    document.querySelector('.our-story').scrollIntoView({ behavior: 'smooth' });
});

// Функція для анімації при скролі
function revealOnScroll() {
    const elements = document.querySelectorAll('.fade-up');
    elements.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

document.addEventListener("scroll", function() {
    const elements = document.querySelectorAll(".fade-up");
    elements.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            el.classList.add("visible");
        }
    });
});

// Запускаємо анімацію при завантаженні сторінки
window.addEventListener("load", function() {
    document.querySelectorAll(".fade-up").forEach(el => el.classList.add("visible"));
});
