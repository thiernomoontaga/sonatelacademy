import { createElement, createInput, createCardElement } from './components.js';

const input_tag = [
  ['input', { type: 'text', class: 'search', placeholder: 'search' }],
  ['div', { id: 'screen_card', class: 'screen_card' }]
];

const input = [
  ['div', { id: 'input_field', class: 'input_field' }],
  ['input', { type: 'text', id: 'input_add', placeholder: 'Add a title' }],
  ['button', { id: 'btn-add' }, 'next']
];

let elements = [];
let currentElement = {};
let retrieve_description = false;
let btn_add, input_add, screen_card;

function retrieve_user_data() {
  btn_add.addEventListener('click', () => {
    const submitted_value = input_add.value.trim();

    if (submitted_value.length < 3) {
      input_add.style.border = '2px solid red';
      return;
    }

    input_add.style.border = '1px solid rgba(62, 62, 65, 0.2)';

    if (!retrieve_description) {
      currentElement = { title: submitted_value };
      input_add.value = '';
      input_add.placeholder = 'add a description';
      btn_add.textContent = 'save';
      retrieve_description = true;
    } else {
      currentElement.description = submitted_value.trim();
      currentElement.score = submitted_value.length;
      elements.push({ ...currentElement });

      input_add.value = '';
      input_add.placeholder = 'Add a title';
      btn_add.textContent = 'next';
      retrieve_description = false;

      refreshDisplay();
    }
  });
}

function refreshDisplay() {
  screen_card.innerHTML = '';
  elements.forEach(element => {
    const card = createCardElement(element);
    screen_card.prepend(card);
  });
}

function search_by_title() {
  const searchInput = document.querySelector('.search');

  searchInput.addEventListener('input', (e) => {
    const value = e.target.value.trim();

    if (value.length >= 3) {
      filter(value);
    } else {
      refreshDisplay();
    }
  });
}

function filter(searchTerm) {
  const filteredElements = elements.filter(element =>
    element.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  displayResults(filteredElements);
}

function displayResults(results) {
  screen_card.innerHTML = '';

  results.forEach(element => {
    const card = createCardElement(element);
    screen_card.appendChild(card);
  });
}

function initApp() {
  const screen = document.getElementById('screen');
  const screenElements = createInput(input_tag);
  const inputElements = createInput(input);

  screen.appendChild(inputElements[0]);
  const inputField = inputElements[0];
  inputField.appendChild(inputElements[1]);
  inputField.appendChild(inputElements[2]);

  screen.appendChild(screenElements[0]);
  screen.appendChild(screenElements[1]);

  btn_add = document.getElementById('btn-add');
  input_add = document.getElementById('input_add');
  screen_card = document.getElementById('screen_card');

  retrieve_user_data();
  search_by_title();
}

document.addEventListener('DOMContentLoaded', initApp);

