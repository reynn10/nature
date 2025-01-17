const body = document.querySelector('body');

function createLeaf() {
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');
    leaf.style.left = `${Math.random() * 100}vw`; // Posisi horizontal acak
    leaf.style.animationDuration = `${Math.random() * 5 + 5}s`; // Durasi jatuh acak
    body.appendChild(leaf);

    setTimeout(() => {
        leaf.remove();
    }, 10000);
}

// Buat daun setiap 1 detik
setInterval(createLeaf, 1000);
const container = document.querySelector('.leaf-container');

function createLeaf() {
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');
    leaf.style.left = `${Math.random() * 100}vw`;
    leaf.style.animationDuration = `${Math.random() * 5 + 5}s`;
    container.appendChild(leaf);

  
    setTimeout(() => {
        leaf.remove();
    }, 10000);
}




function countdown() {
    const weddingDate = new Date(2025, 2, 23, 10, 0, 0).getTime(); 
    const now = new Date().getTime();
    const difference = weddingDate - now;

    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;
    } else {
        document.getElementById('countdown-timer').innerHTML = "<p>Acara sedang berlangsung!</p>";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    setInterval(countdown, 1000); 
});
