// Import stylesheets
import './style.css';

const searchBar = document.querySelector('[data-input]');
const contacts = document.querySelectorAll('[data-contact]');

const fillterList = (input, contact) => {
  contact.forEach((cont) => {
    const match = new RegExp(input.value, 'i').test(cont.textContent);
    if (!match) {
      const parentDiv = cont.parentElement.parentElement
      parentDiv.classList.add('hide')
      
    } else {
      const parentDiv = cont.parentElement.parentElement
      parentDiv.classList.remove('hide')
    }
  });
};

searchBar.addEventListener('keyup', () => {
  fillterList(searchBar, contacts);
});
