//Book Object
function Book(title, author, isbn) {
  this.title = title
  this.author = author
  this.isbn = isbn
}

//UI Section
function UI() {}

UI.prototype.addBookToList = function (book) {
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

//show alert
UI.prototype.showAlert = function (message, msgClass) {
  //creat div
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

UI.prototype.deleteBook = function (target) {
  if (target.className === 'delete') {
    target.parentElement.parentElement.remove()
  }
}

UI.prototype.clearFields = function () {
  document.getElementById('title').value = ''
  document.getElementById('author').value = ''
  document.getElementById('isbn').value = ''
}

//Event Listener

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
    ui.showAlert('Book Added', 'success')
    ui.clearFields()
  }

  e.preventDefault()
})

document.getElementById('book-list').addEventListener('click', function (e) {
  const ui = new UI()
  ui.deleteBook(e.target)
  ui.showAlert('The Book is removed', 'success')
  e.preventDefault()
})
