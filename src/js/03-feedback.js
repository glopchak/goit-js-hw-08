import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  email: document.querySelector('.feedback-form input'),
};

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

const formState = localStorage.getItem('feedback-form-state')
  ? JSON.parse(localStorage.getItem('feedback-form-state'))
  : {};

onTetareaInput();

function onFormInput(evt) {
  formState[evt.target.name] = evt.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.target.reset();
  localStorage.removeItem('feedback-form-state');

  console.log(formState);
}

function onTetareaInput() {
  if (!localStorage.getItem('feedback-form-state')) {
    return;
  }

  const savedMessage = JSON.parse(localStorage.getItem('feedback-form-state'));
//   console.log(savedMessage);

  if (savedMessage) {
    if (savedMessage.email) {
      refs.email.value = savedMessage.email;
    }

    if (savedMessage.message) {
      refs.textarea.value = savedMessage.message;
    }
  }
}
