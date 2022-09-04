import { http } from './http'
import { ui } from './ui'

// Get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts)
document.querySelector('.post-submit').addEventListener('click', submitPost)
// document.querySelector('.delete').addEventListener('click', deletePost)

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
        //ui.clearFields()
        getPosts()
      })
      .catch((err) => console.log(err))

    ui.showAlert('Post Added', 'alert')
    ui.clearFields()
  }

  e.preventDefault()
}

// function deletePost(e) {
//   console.log('delete post')
//   s = e.target.classList.include('data-id').value
//   console.log(s)
// }
