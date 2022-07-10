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

  taskList.addEventListener('click', removeItem)
  clearBtn.addEventListener('click', removeAll)
  filter.addEventListener('keyup', filterTasks)
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

function removeItem(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are You Sure? ')) {
      e.target.parentElement.parentElement.remove()
    }
  }
}

function removeAll(e) {
  //first way
  //taskList.innerHTML = ''

  //another way
  /*if (confirm('Are You Sure? ')) {
    let allTasks = document.querySelectorAll('li')
    let tasksArr = Array.from(allTasks)
    tasksArr.forEach(function (li) {
      li.remove()
    })
  }*/

  //faster way
  while (taskList.firstChild) {
    taskList.firstChild.remove()
  }
}

function filterTasks(e) {
  let filterText = e.target.value.toLowerCase()

  let allTasks = document.querySelectorAll('.collection-item')

  allTasks.forEach(function (task) {
    const item = task.firstChild.textContent
    if (item.toLowerCase().indexOf(filterText) != -1) {
      task.style.display = 'block'
    } else {
      task.style.display = 'none'
    }
  })
}
