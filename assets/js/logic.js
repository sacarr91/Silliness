// toggle light-dark mode
const toggle = document.getElementById("flexSwitchCheckDefault")
const headEl = document.getElementById("Stanley");

// adjust navbar styling
const logoImg = document.getElementById("logo");
const sunImg = document.getElementById("sun");
const moonImg = document.getElementById("moon");

// adjust fancy box styling on blog entry page
function toggleFancyBoxColors() {
    const fancyBox = document.querySelectorAll('div.fancy-box');
    // iterate through all cards
    if (toggle.checked) {
    fancyBox.forEach(div => {
        div.classList.add('dark-box');
        div.classList.remove('light-box');
    })} else {
    fancyBox.forEach(div => {
        div.classList.add('light-box');
        div.classList.remove('dark-box');
    })};
};

function changeColorMode() {
    if (toggle.checked) {
        headEl.setAttribute("data-bs-theme", "dark");
        logoImg.setAttribute("src", "./assets/in the market logo-dk.png");
        sunImg.setAttribute("src", "./assets/sun-dk.png");
        moonImg.setAttribute("src", "./assets/moon-dk.png");
        toggleFancyBoxColors();       
    } else {
        headEl.removeAttribute("data-bs-theme", "dark");
        logoImg.setAttribute("src", "./assets/in the market logo-lt.png");
        sunImg.setAttribute("src", "./assets/sun-lt.png");
        moonImg.setAttribute("src", "./assets/moon-lt.png");
        toggleFancyBoxColors();
    };
};

document.getElementById("flexSwitchCheckDefault").addEventListener("click", changeColorMode);