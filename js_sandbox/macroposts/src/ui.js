import { setTimeout } from 'timers'

class UI {
  constructor() {
    this.post = document.querySelector('#posts')
    this.titleInput = document.querySelector('#title')
    this.bodyInput = document.querySelector('#body')
    this.idInput = document.querySelector('#id')
    this.postSubmit = document.querySelector('.post-submit')
    this.forState = 'add'
  }

  showPosts(posts) {
    let output = ''

    posts.forEach((post) => {
      output += `
        <div class="card mb-3">
          <div class="card-body">
            <h4 class="card-title">${post.title}</h4>
            <p class="card-text">${post.body}</p>
            <a href="#" class="edit card-link" data-id="${post.id}">
              <i class="fa fa-pencil"></i>
            </a>

            <a href="#" class="delete card-link" data-id="${post.id}">
            <i class="fa fa-remove"></i>
          </a>
          </div>
        </div>
      `
    })

    this.post.innerHTML = output
  }

  showAlert(message, msgClass) {
    this.clearAlert()
    const div = document.createElement('div')
    div.className = msgClass

    div.appendChild(document.createTextNode(message))

    //get parent
    const container = document.querySelector('.postscontainer')
    const posts = document.querySelector('#posts')

    container.insertBefore(div, posts)

    setTimeout(() => {
      this.clearAlert()
    }, 3000)
  }

  fillForm(data) {
    this.titleInput.value = data.title
    this.bodyInput.value = data.body
    this.idInput.value = data.id
    console.log('====================================')
    console.log(this.idInput.value)
    console.log('====================================')
    this.changeState('edit')
  }

  clearIdInput() {
    this.idInput.value = ''
  }

  changeState(type) {
    if (type === 'edit') {
      this.postSubmit.textContent = 'Update Post'
      this.postSubmit.className = 'post-submit btn btn-warning btn-block'
      //create cancel button

      const button = document.createElement('button')
      button.className = 'cancel-btn btn btn-light btn-block'
      button.appendChild(document.createTextNode('Cancel '))

      const cardForm = document.querySelector('.card-form')
      const formend = document.querySelector('.form-end')
      cardForm.insertBefore(button, formend)
    } else {
      this.postSubmit.textContent = 'Post It'
      this.postSubmit.className = 'post-submit btn btn-primary btn-block'
      const cancelButton = document.querySelector('.cancel-btn')
      if (cancelButton !== null) {
        cancelButton.remove()
      }
      this.clearIdInput()
      this.clearFields()
    }
  }

  clearAlert() {
    const currentAlert = document.querySelector('.alert')
    if (currentAlert) {
      currentAlert.remove()
    }
  }

  clearFields() {
    console.log('here is clearing')
    this.titleInput.value = ''
    this.bodyInput.value = ''
  }
}

export const ui = new UI()
