// Close Message Script for Contact Form

const CloseMessage = document.getElementById('MessageDiv');

function Closemessage(){
    CloseMessage.style.display = 'none'
};

setTimeout(Closemessage, 5000);

// Button change Script


function ChangeButton() {
    
    const SendBtn = document.querySelector('.Send-btn');
    SendBtn.textContent = "Sending...";
    SendBtn.disabled = 'true';
}

// Function to restrict input to alphabets only

const firstNameInput = document.getElementById('fname');
const lastNameInput = document.getElementById('lname');

function allowOnlyAlphabets(event) {
    const char = String.fromCharCode(event.which || event.keyCode);
    if (!/^[a-zA-Z]+$/.test(char)) {
        event.preventDefault();
    }
}

firstNameInput.addEventListener('keypress', allowOnlyAlphabets);
lastNameInput.addEventListener('keypress', allowOnlyAlphabets);