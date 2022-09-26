const toggleSections = () => {
  const booksSection = document.getElementById('books-list');
  const addBookSection = document.getElementById('add-books');
  const contactSection = document.getElementById('contact');

  const navItemBookList = document.getElementById('nav__item--books-list');
  const navItemAddBook = document.getElementById('nav__item--add-book');
  const navItemContact = document.getElementById('nav__item--contact');

  navItemBookList.addEventListener('click', () => {
    addBookSection.style.display = 'none';
    contactSection.style.display = 'none';
    booksSection.style.display = 'block';
  });

  navItemAddBook.addEventListener('click', () => {
    contactSection.style.display = 'none';
    booksSection.style.display = 'none';
    addBookSection.style.display = 'flex';
  });

  navItemContact.addEventListener('click', () => {
    booksSection.style.display = 'none';
    addBookSection.style.display = 'none';
    contactSection.style.display = 'block';
  });
};

export default toggleSections;
