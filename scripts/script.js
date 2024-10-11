const download = document.getElementById("download");
const menuButtons = document.querySelectorAll('#menu button');

document.getElementById("menu-btn").addEventListener("click", function() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("hidden");
});

download.addEventListener('click', function(){
    const file = "./files/Lacap, Karl Bastian Cunanan CV.pdf";

    const fileName = "CV";

    const link = document.createElement("a");

    link.href = file;

    link.download = fileName;

    link.click();

});

menuButtons.forEach(button => {
    button.addEventListener('click', function() {
        const menu = document.getElementById("menu");
        menu.classList.add("hidden");
    });
});
