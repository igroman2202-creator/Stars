// Елементи для анімації
const deathStar = document.getElementById('deathStar');
const superlaser = document.getElementById('superlaser');
const startAllBtn = document.getElementById('startAll');
const stopAllBtn = document.getElementById('stopAll');
const animateDeathStarBtn = document.getElementById('animateDeathStar');
const animateLaserBtn = document.getElementById('animateLaser');
const animatePulseBtn = document.getElementById('animatePulse');
const animateFloatBtn = document.getElementById('animateFloat');

// Стан анімацій
let animationsActive = {
    rotate: false,
    pulse: false,
    float: false
};

// Функції анімацій
function toggleRotation() {
    if (animationsActive.rotate) {
        deathStar.classList.remove('rotate-animation');
        animateDeathStarBtn.classList.remove('active');
    } else {
        deathStar.classList.add('rotate-animation');
        animateDeathStarBtn.classList.add('active');
    }
    animationsActive.rotate = !animationsActive.rotate;
}

function togglePulse() {
    if (animationsActive.pulse) {
        deathStar.classList.remove('pulse-animation');
        animatePulseBtn.classList.remove('active');
    } else {
        deathStar.classList.add('pulse-animation');
        animatePulseBtn.classList.add('active');
    }
    animationsActive.pulse = !animationsActive.pulse;
}

function toggleFloat() {
    if (animationsActive.float) {
        deathStar.classList.remove('float-animation');
        animateFloatBtn.classList.remove('active');
    } else {
        deathStar.classList.add('float-animation');
        animateFloatBtn.classList.add('active');
    }
    animationsActive.float = !animationsActive.float;
}

function fireLaser() {
    superlaser.style.animation = 'none';
    setTimeout(() => {
        superlaser.style.animation = 'fireLaser 3s forwards';
    }, 10);
    
    // Додаємо візуальний ефект для кнопки
    animateLaserBtn.classList.add('active');
    setTimeout(() => {
        animateLaserBtn.classList.remove('active');
    }, 3000);
}

function startAllAnimations() {
    if (!animationsActive.rotate) toggleRotation();
    if (!animationsActive.pulse) togglePulse();
    if (!animationsActive.float) toggleFloat();
    
    startAllBtn.classList.add('active');
    setTimeout(() => {
        startAllBtn.classList.remove('active');
    }, 1000);
}

function stopAllAnimations() {
    if (animationsActive.rotate) toggleRotation();
    if (animationsActive.pulse) togglePulse();
    if (animationsActive.float) toggleFloat();
    
    stopAllBtn.classList.add('active');
    setTimeout(() => {
        stopAllBtn.classList.remove('active');
    }, 1000);
}

// Додавання обробників подій
animateDeathStarBtn.addEventListener('click', toggleRotation);
animatePulseBtn.addEventListener('click', togglePulse);
animateFloatBtn.addEventListener('click', toggleFloat);
animateLaserBtn.addEventListener('click', fireLaser);
startAllBtn.addEventListener('click', startAllAnimations);
stopAllBtn.addEventListener('click', stopAllAnimations);

// Автозапуск головної анімації при завантаженні
window.addEventListener('load', () => {
    setTimeout(() => {
        deathStar.classList.add('rotate-animation');
        animationsActive.rotate = true;
        animateDeathStarBtn.classList.add('active');
    }, 1000);
});