// Getting the Advice number element
const idChange = document.getElementById('advice-number');

// Getting the Advice Display
const adviceDisplay = document.querySelector('.advice-display');

// Getting the Error Display
const errorDisplay = document.querySelector('.error');

// Getting the Button
const buttonElement = document.querySelector('.btn');

// api link
const apiUrl = 'https://api.adviceslip.com/advice';

// function to remove the error
function removeError() {
    setTimeout(() => {
        errorDisplay.style.display = 'none';
    }, 2000);
}

// function displaying the advice
async function generateAdvice() {
    try {
        const request = await fetch(apiUrl);
        const response = await request.json();
        idChange.innerText = response.slip.id;
        adviceDisplay.innerText = response.slip.advice;
    } catch (error) {
        errorDisplay.style.display = 'block';
        removeError();
    };
};

// Making the button work
buttonElement.addEventListener('click', () => {
    generateAdvice();
});

generateAdvice();