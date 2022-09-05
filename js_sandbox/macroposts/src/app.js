import { http } from './http'
import { ui } from './ui'

// Get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts)
document.querySelector('.post-submit').addEventListener('click', submitPost)
//document.querySelector('#posts').addEventListener('click', deletePost)
document.querySelector('#posts').addEventListener('click', enableEdit)

function getPosts() {
  http
    .get('http://localhost:3000/posts')
    .then((data) => ui.showPosts(data))
    .catch((err) => console.log(err))
}

function submitPost(e) {
  const title = document.querySelector('#title').value
  const body = document.querySelector('#body').value

  if (title !== '' && body !== '') {
    const data = {
      title,
      body,
    }

    //create post

    http
      .post('http://localhost:3000/posts', data)
      .then((data) => {
        ui.showAlert('Post Added', 'alert alert-success')
        ui.clearFields()
        getPosts()
      })
      .catch((err) => console.log(err))
  }

  e.preventDefault()
}

function enableEdit(e) {
  if (e.target.parentElement.classList.contains('edit')) {
    const id = e.target.parentElement.dataset.id
    const title =
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent
    const body = e.target.parentElement.previousElementSibling.textContent

    const data = {
      id,
      title,
      body,
    }

    ui.fillForm(data)
  }
}
