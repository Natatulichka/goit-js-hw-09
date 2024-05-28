const form = document.querySelector('.feedback-form');
const messageTextarea = form.querySelector('textarea[name="message"]');
const input = document.querySelectorAll('.feedback-form input');
input.forEach(element => {
  element.classList.add('feedback-form-input');
});
messageTextarea.classList.add('feedback-form-textarea');
document
  .querySelector('.feedback-form button')
  .classList.add('feedback-form-button');
// --------------
let formData = {
  email: '',
  message: '',
};
function addToLocalStorage() {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
function fillFormLocalStorage() {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    formData = JSON.parse(savedData);
    emailInput.value = formData.email;
    messageTextarea.value = formData.message;
  }
}
form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value;
  addToLocalStorage();
});
form.addEventListener('submit', function (event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData = { email: '', message: '' };
    form.reset();
  }
});
