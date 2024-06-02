// Пошук DOM-елементів та додавання класів
const form = document.querySelector('.feedback-form');
form.querySelector('textarea').classList.add('feedback-form-textarea');
form.querySelector('input').classList.add('feedback-form-input');
form.querySelector('button').classList.add('feedback-form-button');
//  Прослуховувач подій при вводі данних та збереження до локального сховища.
form.addEventListener('input', () => {
  const formData = new FormData(form);
  const email = formData.get('email').trim();
  const message = formData.get('message').trim();
  const data = { email, message };
  saveToLS('feedback-form-state', data);
});
// Прослуховувач подій при натисканні на кнопку та виведення данних з локального сховища
form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(form);
  const email = formData.get('email').trim();
  const message = formData.get('message').trim();
  const data = { email, message };
  if (!data.email || !data.message) {
    alert('Fill please all fields');
  } else {
    console.log(data);
    form.reset();

    localStorage.removeItem('feedback-form-state');
  }
});
// шаблонна функція для збереження у локальне сховище
function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}
// шаблонна функція для виведення данних з локального сховища
function loadFromLS(key) {
  const json = localStorage.getItem(key);
  // Конструкція try...catch ловить тільки помилки, які виникли під час виконання коду (runtime errors).
  try {
    const data = JSON.parse(json);
    return data;
  } catch {
    return json;
  }
}
// виведення данних з локального сховища у браузер після оновлення сторінки й робимо перевірку на той випадок, якщо нема данних у локалсторідж
window.addEventListener('DOMContentLoaded', () => {
  const data = loadFromLS('feedback-form-state');

  form.elements.email.value = data?.email || '';
  form.elements.message.value = data?.message || '';
});
