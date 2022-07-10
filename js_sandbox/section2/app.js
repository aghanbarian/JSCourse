// localStorage.setItem('name', 'John')

// // sessionStorage.setItem('name', 'ahmad')

// console.log(localStorage.getItem('name'))

// console.log(sessionStorage.getItem('name'))
// localStorage.clear()
let element = document.querySelector('form')
console.log(element)

document.querySelector('form').addEventListener('submit', function (e) {
  const task = document.getElementById('task').value
  let tasks

  if (localStorage.getItem('tasks') === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  console.log(task)

  tasks.push(task)

  console.log(tasks);

  localStorage.setItem('tasks', JSON.stringify(tasks))

  alert('task saved')

  e.preventDefault
})
