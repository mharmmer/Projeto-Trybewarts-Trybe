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

//Estilizando Página

const houses = document.getElementById('house');
const header = document.querySelector('.header');
const headerH1 = document.getElementById('trybewarts-header-title');
const email = document.getElementById('email');
const password = document.getElementById('password');
const loginBtn = document.getElementById('login-button');

const housesStyle = () => {
  if (houses.value === 'Gitnória') {
    header.style.backgroundColor = '#7F0909';
    headerH1.style.color = '#FFC500';
  } else if (houses.value === 'Reactpuff') {
    header.style.backgroundColor = '#E3BB0C';
    headerH1.style.color = '#211F1B';
  } else if (houses.value === 'Corvinode') {
    header.style.backgroundColor = '#000A90';
    headerH1.style.color = '#946B2D';
  } else if (houses.value === 'Pytherina') {
    header.style.backgroundColor = '#0d6217';
    headerH1.style.color = '#AAAAAA';
  }
}

houses.addEventListener('change', housesStyle);

// TextArea counter
const spanArea = document.getElementById('textarea-span');
const textArea = document.getElementById('textarea');

const updateText = () => {
  spanArea.innerText = `${textArea.maxLength - (textArea.textLength)}`;
}

textArea.addEventListener('input', updateText);
