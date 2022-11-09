// import storageAPI from './storage';
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(textRead, 500));
form.addEventListener('submit', onFormSubmit);

function textRead(evt) {
  const dataStorage = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataStorage));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(localStorage.getItem(STORAGE_KEY));
  evt.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

saveFormData();
function saveFormData() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  email.value = savedMessage.email || '';
  message.value = savedMessage.message || '';
}
