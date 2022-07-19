class Book {
  constructor(title, author, isbn) {
    this.title = title
    this.author = author
    this.isbn = isbn
  }
}

class UI {
  addBookToList(book) {
    const list = document.getElementById('book-list')
    const row = document.createElement('tr')

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class='delete'>X</a></td>
  `
    list.appendChild(row)
  }

  showAlert(message, msgClass) {
    const div = document.createElement('div')
    div.className = `alert ${msgClass}`
    //add text
    div.appendChild(document.createTextNode(message))
    //get parent
    const container = document.querySelector('.container')
    const form = document.querySelector('#book-form')
    //insert element before form
    container.insertBefore(div, form)

    //timer to disapear element

    setTimeout(function () {
      document.querySelector('.alert').remove()
    }, 3000)
  }
  deleteBook(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove()
    }
  }

  clearFields() {
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('isbn').value = ''
  }
}

// Store Object
class Store {
  static getBooks() {
    let books
    localStorage.getItem('books')
    if (localStorage.getItem('books') === null) {
      books = []
    } else {
      books = JSON.parse(localStorage.getItem('books'))
    }
    return books
  }
  static displayBooks() {
    const books = Store.getBooks()
    books.forEach(function (book) {
      const ui = new UI()
      ui.addBookToList(book)
    })
  }

  static addBook(book) {
    const books = Store.getBooks()

    books.push(book)

    localStorage.setItem('books', JSON.stringify(books))
  }

  static removeBook(isbn) {
    const books = Store.getBooks()
    books.forEach(function (book, index) {
      if (book.isbn === isbn) {
         books.splice(index, 1)
      }
    }
    )
  }
}

//Event Listener
document.addEventListener('DOMEventLoaded', Store.displayBooks())

//submit click
document.getElementById('book-form').addEventListener('submit', function (e) {
  const title = document.getElementById('title').value
  const author = document.getElementById('author').value
  const isbn = document.getElementById('isbn').value

  const book = new Book(title, author, isbn)

  const ui = new UI()

  if (title === '' || author === '' || isbn === '') {
    //error raising
    ui.showAlert('Please fill in all fields', 'error')
  } else {
    ui.addBookToList(book)
    Store.addBook(book)
    ui.showAlert('Book Added', 'success')
    ui.clearFields()
  }

  e.preventDefault()
})

document.getElementById('book-list').addEventListener('click', function (e) {
  const ui = new UI()
  ui.deleteBook(e.target)
  console.log(e.target.parentElement.previousElementSibling.textContent);
  //Store.removeBook(e.target.parentElement.previousElementSibling.textContent)
  ui.showAlert('The Book is removed', 'success')
  e.preventDefault()
})
