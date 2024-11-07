const Metals = document.getElementById('Mettals');
const Plastic = document.getElementById('Plastic');
const Bottles = document.getElementById('Bottles');
const Pappers = document.getElementById('Pappers');
const Iframe = document.querySelector('.Iframe');

Metals.addEventListener('click', () => {
    // Iframe.src = './metals.html';
    Iframe.src = 'Metals';
    Metals.classList.add("Active");
    Plastic.classList.remove("Active");
    Pappers.classList.remove("Active");
    Bottles.classList.remove("Active");
});

Plastic.addEventListener('click', () => {
    // Iframe.src = './plastic.html';
    Iframe.src = 'Plastic';
    Plastic.classList.add("Active");
    Metals.classList.remove("Active");
    Pappers.classList.remove("Active");
    Bottles.classList.remove("Active");
});

Bottles.addEventListener('click', () => {
    // Iframe.src = './bottles.html';
    Iframe.src = 'Bottles';
    Bottles.classList.add("Active");
    Metals.classList.remove("Active");
    Plastic.classList.remove("Active");
    Pappers.classList.remove("Active");
});

Pappers.addEventListener('click', () => {
    // Iframe.src = './papers.html';
    Iframe.src = 'Papper';
    Pappers.classList.add("Active");
    Metals.classList.remove("Active");
    Plastic.classList.remove("Active");
    Bottles.classList.remove("Active");
});
