//  Toggle Button for Navigation 

const button = document.getElementById('menu-icon');
const nav = document.querySelector('.Navigation');
const blackScreen = document.querySelector('.blackScreen');
const navContainer = document.querySelector('.NavContainer')

button.addEventListener('click', () => {
    if(button.classList.contains('fa-bars-staggered')){
        button.classList.remove('fa-bars-staggered');
        button.classList.add('fa-times');
        blackScreen.style.left = '0'
        nav.style.left = '0px'
        navContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        navContainer.style.borderBottom = '1px solid rgba(0, 255, 255, 0.7)'
    }else{
        button.classList.remove('fa-times');
        button.classList.add('fa-bars-staggered');
        blackScreen.style.left = '-100%'
        nav.style.left = '-60%'
        navContainer.style.backgroundColor = 'transparent';
        navContainer.style.borderBottom = 'none'
    }
});

blackScreen.addEventListener('click', () => {
    if(button.classList.contains('fa-bars-staggered')){
        button.classList.remove('fa-bars-staggered');
        button.classList.add('fa-times');
        blackScreen.style.left = '0px'
        nav.style.left = '0px'
        navContainer.style.background = 'linear-gradient(135deg, #333549, #356155)';

    }else{
        button.classList.remove('fa-times');
        button.classList.add('fa-bars-staggered');
        blackScreen.style.left = '-100%'
        nav.style.left = '-60%'
        navContainer.style.background = 'linear-gradient(135deg, rgba(51, 53, 73, 0.4), rgba(53, 97, 85, 0.4))';

    }
})

// Managing Active Status for Navigation Bar
    
const activePage = window.location.pathname;
let isActivePageFound = false;

document.querySelectorAll('.NavLink').forEach(link => {
    if (link.pathname === activePage) {
        link.parentElement.classList.add('active');
        isActivePageFound = true;
    }
});

if (!isActivePageFound) {
    document.querySelector('a[href="/Home"]').parentElement.classList.add('active');
}

// Smooth Scrolling to the top

document.querySelector('.UpArrow a').addEventListener('click', function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
});

// Script for Hide Up Arrow when it is in the top

const UpArrow = document.querySelector('.UpArrow');

function ToggleUpArrow(){
    if (window.scrollY >= 80) {
        UpArrow.style.display = 'block';
    } else {
        UpArrow.style.display = 'none';
    }
}

window.addEventListener('scroll', ToggleUpArrow);

ToggleUpArrow();
