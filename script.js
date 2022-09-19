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
  if (e.target.id === 'reset-btn') {
    resetPage();
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
const footer = document.getElementById('footer')

const housesStyle = () => {
  if (houses.value === 'Gitnória') {
    header.style.backgroundColor = 'rgba(223 9 9 / 20%)';
    header.style.boxShadow = 'rgba(223 9 9 / 20%) 0px 4px 3px -1px, 0 0 40px rgb(8 7 16 / 60%)';
    headerH1.style.color = 'rgba(255 197 0 / 80%)';

    footer.style.backgroundColor = 'rgba(223 9 9 / 20%)';
    footer.style.boxShadow = 'rgba(223 9 9 / 20%) 0px 4px 3px 6px, 0 0 40px rgb(8 7 16 / 60%)';
    footer.style.color = 'rgba(255 197 0 / 80%)';

  } else if (houses.value === 'Reactpuff') {
    header.style.backgroundColor = 'rgba(227 187 12 / 20%)';
    header.style.boxShadow = 'rgba(227 187 12 / 20%) 0px 4px 3px -1px, 0 0 40px rgb(8 7 16 / 60%)';
    headerH1.style.color = 'rgb(0 0 0 / 72%)';

    footer.style.backgroundColor = 'rgba(227 187 12 / 20%)';
    footer.style.boxShadow = 'rgba(227 187 12 / 20%) 0px 4px 3px 6px, 0 0 40px rgb(8 7 16 / 60%)';
    footer.style.color = 'rgb(0 0 0 / 72%)';

  } else if (houses.value === 'Corvinode') {
    header.style.backgroundColor = 'rgba(0 10 144 / 20%)';
    header.style.boxShadow = 'rgba(0 10 144 / 20%) 0px 4px 3px -1px, 0 0 40px rgb(8 7 16 / 60%)';
    headerH1.style.color = 'rgb(255 225 0 / 80%)';

    footer.style.backgroundColor = 'rgba(0 10 144 / 20%)';
    footer.style.boxShadow = 'rgba(0 10 144 / 20%) 0px 4px 3px 6px, 0 0 40px rgb(8 7 16 / 60%)';
    footer.style.color = 'rgb(255 225 0 / 80%)';

  } else if (houses.value === 'Pytherina') {
    header.style.backgroundColor = 'rgba(13 98 23 / 20%)';
    header.style.boxShadow = 'rgba(13 98 23 / 20%) 0px 4px 3px -1px, 0 0 40px rgb(8 7 16 / 60%)';
    headerH1.style.color = 'rgba(180 180 180 / 80%)';

    footer.style.backgroundColor = 'rgba(13 98 23 / 20%)';
    footer.style.boxShadow = 'rgba(13 98 23 / 20%) 0px 4px 3px 6px, 0 0 40px rgb(8 7 16 / 60%)';
    footer.style.color = 'rgba(180 180 180 / 80%)';

  } else if (houses.value === 'noneOption') {
    header.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    header.style.boxShadow = 'rgb(255, 255, 255, 0.2) 0px 4px 3px -1px, 0 0 40px rgb(8 7 16 / 60%)';
    headerH1.style.color = 'rgba(245, 245, 245, 0.900)';

    footer.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    footer.style.boxShadow = 'rgb(255, 255, 255, 0.2) 0px 4px 3px 6px, 0 0 40px rgb(8 7 16 / 60%)';
    footer.style.color = 'rgba(245, 245, 245, 0.900)';
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

// Resetando página

const resetPage = () => {
  header.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
  header.style.boxShadow = 'rgb(255, 255, 255, 0.2) 0px 4px 3px -1px, 0 0 40px rgb(8 7 16 / 60%)';
  headerH1.style.color = 'rgba(245, 245, 245, 0.900)';

  footer.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
  footer.style.boxShadow = 'rgb(255, 255, 255, 0.2) 0px 4px 3px 6px, 0 0 40px rgb(8 7 16 / 60%)';
  footer.style.color = 'rgba(245, 245, 245, 0.900)';
}