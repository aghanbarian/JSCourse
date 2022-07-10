const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-task')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

//load all event listener

loadEventListeners()

//load all event listener

function loadEventListeners() {
  form.addEventListener('submit', addTask)
}

//Add Task
function addTask(e) {
  if (taskInput.value === '') {
    alert('Add a task')
  } else {
    //create li item
    let li = document.createElement('li')

    //add class
    li.className = 'collection-item'

    //create nodetext and append to li
    li.appendChild(document.createTextNode(taskInput.value))

    //create link element
    const link = document.createElement('a')

    //add class
    link.className = 'delete-item secondary-content'
    //add icon
    link.innerHTML = '<i class= "fa fa-remove"></i>'

    //add the link to li
    li.appendChild(link)

    taskList.appendChild(li)

    taskInput.value = ''
  }
  e.preventDefault()
}
