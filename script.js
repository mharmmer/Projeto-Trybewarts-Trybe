const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const checkedInfo = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');
const globalForm = document.getElementById('evaluation-form');
const header = document.getElementById('main');

const nameValue = document.getElementById('input-name');
const lastNameValue = document.getElementById('input-lastname');
const emailValue = document.getElementById('input-email');

const houseValue = document.getElementById('house');

const familyValues = document.querySelectorAll('input[name=family]');

const subjectValues = document.querySelectorAll('input[name=subject]');

const evaluationRatio = document.querySelectorAll('input[name=rate]');

const observations = document.getElementById('textarea');

submitButton.disabled = true;

function validateLogin() {
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
    inputEmail.value = '';
    inputPassword.value = '';
  } else {
    alert('Email ou senha inválidos.');
    inputEmail.value = '';
    inputPassword.value = '';
  }
}

function createProfile() {
  const div = document.createElement('div');
  div.setAttribute('id', 'form-data');
  document.body.insertBefore(div, header);
  const p1 = document.createElement('p');
  p1.innerText = `Nome: ${nameValue.value} ${lastNameValue.value}`;
  div.appendChild(p1);
  const p2 = document.createElement('p');
  p2.innerText = `Email: ${emailValue.value}`;
  div.appendChild(p2);
}

function createSelectedHouse() {
  const p3 = document.createElement('p');
  p3.innerText = `Casa: ${houseValue.value}`;
  document.getElementById('form-data').appendChild(p3);
}

function createSelectedFamily() {
  let selectedFamily = '';
  for (let index = 0; index < familyValues.length; index += 1) {
    if (familyValues[index].checked) {
      selectedFamily = familyValues[index].value;
      break;
    }
  }
  const p4 = document.createElement('p');
  p4.innerText = `Família: ${selectedFamily}`;
  document.getElementById('form-data').appendChild(p4);
}

function createSelectedSubjects() {
  const subjects = [];
  for (let index = 0; index < subjectValues.length; index += 1) {
    if (subjectValues[index].checked) {
      subjects.push(` ${subjectValues[index].value}`);
    }
  }
  const p5 = document.createElement('p');
  p5.innerHTML = `Matérias: ${subjects}`;
  document.getElementById('form-data').appendChild(p5);
}

function createEvaluationRatio() {
  let evaluation;
  for (let index = 0; index < evaluationRatio.length; index += 1) {
    if (evaluationRatio[index].checked) {
      evaluation = evaluationRatio[index].value;
      break;
    }
  }
  const p6 = document.createElement('p');
  p6.innerText = `Avaliação: ${evaluation}`;
  document.getElementById('form-data').appendChild(p6);
}

function createObservation() {
  const p7 = document.createElement('p');
  p7.innerText = `Observações: ${observations.value}`;
  document.getElementById('form-data').appendChild(p7);
}

function hideForms() {
  globalForm.style.visibility = 'hidden';
}

function generateInformation() {
  hideForms();
  createProfile();
  createSelectedHouse();
  createSelectedFamily();
  createSelectedSubjects();
  createEvaluationRatio();
  createObservation();
}

document.addEventListener('click', (e) => {
  if (e.target.id === 'login-button') {
    validateLogin();
  }
  if (e.target.id === 'submit-btn') {
    e.preventDefault();
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

// Projeto Completo - Matheus Harmmer
