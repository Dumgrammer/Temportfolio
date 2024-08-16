const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");
const download = document.getElementById("download");
const texts = ["Backend Developer", "Cyber Security"];
const speed = 50;
const changeInterval = 3000;
const randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

let currentText = "";
let currentTextIndex = 0;
let i = 0;

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}

nav.onclick = (event) => {
    if (event.target.tagName === 'A') {
        menu.classList.remove('bx-x');
        nav.classList.remove('active');
    }
}

download.addEventListener('click', function(){
    const file = "files/Lacap, Karl Bastian Cunanan CV.pdf";

    const fileName = "CV";

    const link = document.createElement("a");

    link.href = file;

    link.download = fileName;

    link.click();

});


function typeCharacter() {
    const targetText = texts[currentTextIndex];

    if (i < targetText.length) {
        const randomChar = randomChars[Math.floor(Math.random() * randomChars.length)];
        currentText += randomChar;
        document.getElementById("typing").textContent = currentText;

        setTimeout(() => {
            currentText = currentText.slice(0, -1) + targetText.charAt(i);
            document.getElementById("typing").textContent = currentText;
            i++;
            setTimeout(typeCharacter, speed);
        }, speed);
    } else {
        // Move to the next text after the current one is fully typed
        setTimeout(() => {
            currentTextIndex = (currentTextIndex + 1) % texts.length; // Loop back to the first text
            i = 0;
            currentText = "";
            setTimeout(typeCharacter, speed);
        }, changeInterval); // Delay before starting the next text
    }
}

window.onload = function() {
    typeCharacter();
};

// Reveal animations
ScrollReveal().reveal('nav', {
    duration: 1000,
    origin: 'top',
    distance: '50px'
});

ScrollReveal().reveal('#home img', {
    duration: 1000,
    origin: 'top',
    distance: '50px'
});

ScrollReveal().reveal('#home .info-box', {
    duration: 1000,
    origin: 'right',
    distance: '50px',
    delay: 500
});

ScrollReveal().reveal('.skillogos img', {
    duration: 1000,
    origin: 'bottom',
    distance: '50px',
    interval: 100
});

ScrollReveal().reveal('.button-box .button', {
    duration: 1000,
    origin: 'bottom',
    distance: '50px',
    delay: 1000
});

ScrollReveal().reveal('#experience .header', {
    duration: 1000,
    origin: 'top',
    distance: '50px'
});

ScrollReveal().reveal('.experience-container .box', {
    duration: 1000,
    origin: 'bottom',
    distance: '50px',
    interval: 200
});

ScrollReveal().reveal('#contact .header', {
    duration: 1000,
    origin: 'top',
    distance: '50px'
});

ScrollReveal().reveal('#contact form', {
    duration: 1000,
    origin: 'bottom',
    distance: '50px'
});

ScrollReveal().reveal('footer', {
    duration: 1000,
    origin: 'bottom',
    distance: '50px'
});

