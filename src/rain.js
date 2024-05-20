document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector(".raining-numbers");
    const numNumbers = 80;
    let raining = true; // Variable para controlar si está lloviendo números o no

    // Función para generar los números y crear la lluvia
    function generateRain() {
        for (let i = 0; i < numNumbers; i++) {
            const span = document.createElement("span");
            span.textContent = Math.floor(Math.random() * 10);
            span.classList.add("number");
            span.style.setProperty('--random', Math.random()); // Establecer el valor aleatorio
            span.style.animationDuration = `${Math.random() * 5 + 5}s`;
            span.style.animationDelay = `${Math.random() * 10}s`;
            body.appendChild(span);
        }
    }

    function stopRain() {
        const numbers = document.querySelectorAll(".number");
        numbers.forEach(number => number.remove());
    }


    const toggleButton = document.getElementById("toggleButton");
    toggleButton.addEventListener("click", () => {
        if (raining) {
            stopRain(); 
            toggleButton.textContent = "Matrix ON"; 
        } else {
            generateRain(); 
            toggleButton.textContent = "Matrix OFF"; 
        }
        raining = !raining; 
    });

    generateRain();
});
