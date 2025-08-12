const mainElement = document.body.querySelector('main');
const mainHeader = mainElement.querySelector('h1');
const mainHeaderText = mainHeader.innerText;

setInterval(() => {
    let splitText = mainHeaderText.toLowerCase().split('');
    let wonkyText = '';
    for (let i = 0; i < splitText.length; i++) {
        if (Math.random() < 0.8) {
            wonkyText += splitText[i];
        } else {
            wonkyText += splitText[i].toUpperCase();
        }
    }
    mainHeader.innerText = wonkyText;
}, 250);

const sorryElement = document.getElementById('sorry');
sorryElement.addEventListener('mouseover', () => {
    sorryElement.innerText = 'Nah, not really';
    sorryElement.style.right = "-10px";
})