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
const footerColor = document.getElementById('footer')

const housesStyle = () => {
  if (houses.value === 'Gitnória') {
    header.style.backgroundColor = 'rgba(223 9 9 / 20%)';
    header.style.boxShadow = 'rgba(223 9 9 / 20%) 0px 4px 3px -1px';
    headerH1.style.color = 'rgba(255 197 0 / 80%)';

  } else if (houses.value === 'Reactpuff') {
    header.style.backgroundColor = 'rgba(227 187 12 / 20%)';
    header.style.boxShadow = 'rgba(227 187 12 / 20%) 0px 4px 3px -1px';
    headerH1.style.color = 'rgb(0 0 0 / 72%)';

  } else if (houses.value === 'Corvinode') {
    header.style.backgroundColor = 'rgba(0 10 144 / 20%)';
    header.style.boxShadow = 'rgba(0 10 144 / 20%) 0px 4px 3px -1px';
    headerH1.style.color = 'rgb(255 225 0 / 80%)';

  } else if (houses.value === 'Pytherina') {
    header.style.backgroundColor = 'rgba(13 98 23 / 20%)';
    header.style.boxShadow = 'rgba(13 98 23 / 20%) 0px 4px 3px -1px';
    headerH1.style.color = 'rgba(180 180 180 / 80%)';
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
