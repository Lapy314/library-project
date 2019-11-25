const bookList = document.querySelector('.book-list');
const form = document.querySelector('form');
const newBookBtn = document.querySelector('#newBook');
let myLibrary = [];

function Book (title, author, pages, read) {

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

}

function addBookToLibrary(book) {
  
  return myLibrary.push(book);

}

form.addEventListener('submit', e => {

  e.preventDefault();

  const ul = document.createElement('ul');
  let li1 = document.createElement('li');
  let li2 = document.createElement('li');
  const bookOne = new Book (form.title.value, form.author.value, form.pages.value, form.read.value);

  addBookToLibrary(bookOne);

  li1.textContent = `Title: ${form.title.value} Author: ${form.author.value}`;

  ul.append(li1);

  li2.textContent = `Pages: ${form.pages.value} read: ${form.read.value}`;

  ul.append(li2);

  ul.id = `book-${myLibrary.length}`;

  bookList.append(ul);

})

console.log(myLibrary)

