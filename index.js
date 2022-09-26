import Awesomebooks from './modules/Awesomebooks.js';
import toggleSections from './modules/toggleSections.js';
import addBookListener from './modules/addBookListener.js';
import { DateTime } from './modules/luxon.js';

const dt = DateTime.now();
const currentDate = dt.toLocaleString(DateTime.DATETIME_FULL);
document.getElementById('dateinfo').innerHTML = currentDate;

// listens to page content loaded event
document.addEventListener('DOMContentLoaded', () => {
  Awesomebooks.displayBookList();

  toggleSections();

  addBookListener();
});

// Add active class to the current button (highlight it)
const links = document.getElementsByClassName('nav__item');
for (let i = 0; i < links.length; i += 1) {
  links[i].addEventListener('click', function () {
    const current = document.getElementsByClassName('active');
    current[0].className = current[0]?.className?.replace(' active', '');
    this.className += ' active';
  });
}

const removeBook = (id) => {
  const bookData = Awesomebooks.getBookList();
  const filteredBooks = bookData.filter((item) => item.id !== id);

  // eslint-disable-next-line no-use-before-define
  Awesomebooks.sendToLocal('books', filteredBooks);
};

window.removeBook = removeBook;
