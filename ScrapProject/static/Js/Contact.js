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
}
