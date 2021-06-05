{
  'use strict';

  // MODULE 9.2 EX.1

  // Prepare a reference to the template and the .books-list

  const booksList = document.querySelector('.books-list');

  const template = Handlebars.compile(document.querySelector('#template-book').innerHTML);


  // Add a new render function.

  function render() {

    // Inside it, go over each item in dataSource.books
    for (let book of dataSource.books) {

      // generate the HTML code based on the template and data about the specific book
      const generatedHTML = template(book);

      // Based on this HTML code, generate a DOM element
      const generatedDOM = utils.createDOMFromHTML(generatedHTML);

      // Append the generated DOM element to the .books-list as a new DOM child
      booksList.appendChild(generatedDOM);
    }
  }

  // MODULE 9.2 EX.2

  // new blank favoriteBooks array.
  let favoriteBooks = [];

  // Add the initActions function
  function initActions() {

    // Provide a reference to the list of all .book__image items in the .booksList.
    const bookImages = booksList.querySelectorAll('.book__image');

    // go over each item on that list
    for (const bookImage of bookImages) {

      //add a listener which, when detected, will run a function that will...
      bookImage.addEventListener('dblclick', function (event) {

        // stop the default behavior of the browser (preventDefault)
        event.preventDefault();

        // adds the 'favorite' class to the clicked item
        bookImage.classList.add('favorite');

        // get the book's id from its data-id
        const clickedBookId = event.target.offsetParent.getAttribute('data-id');

        console.log('clicked book id:', clickedBookId);

        // adds this ID to favoriteBooks

        favoriteBooks.push(clickedBookId);
      });
    }
  }
  render();
  initActions();
  console.log('fav books:', favoriteBooks);
}
