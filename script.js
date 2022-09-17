const checkedInfo = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');
const globalForm = document.getElementById('evaluation-form');

const observations = document.getElementById('textarea');

submitButton.disabled = true;

function hideForms() {
  globalForm.style.visibility = 'hidden';
}

function generateInformation() {
  hideForms();
}

document.addEventListener('click', (e) => {
  if (e.target.id === 'login-button') {
    validateLogin();
  }
  if (e.target.id === 'submit-btn') {
    generateInformation();
  }
});

document.addEventListener('change', () => {
  if (checkedInfo.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

// Contador de caracteres da textarea

const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');

textArea.addEventListener('input', () => {
  counter.innerText = `${textArea.textLength} | ${textArea.maxLength - (textArea.textLength)}`;
});
