// replace element

const newHeading = document.createElement('h2')
newHeading.id = 'task-title'
newHeading.appendChild(document.createTextNode('Task List'))

const oldHeading = document.getElementById('task-title')

const elementParent = oldHeading.parentNode

elementParent.replaceChild(newHeading, oldHeading)

//remove element

let val

liList = document.querySelectorAll('li')
liParent = document.querySelector('ul')

liList[0].remove()
liParent.removeChild(liList[2])

const firstLi = document.querySelector('li:first-child')
const link = firstLi.children[0]

val = link.classList
val = link.classList[0]
link.classList.add('test')
val = link

val = link.getAttribute('href')
link.setAttribute('href', 'http://google.com')
val = link.getAttribute('href')
link.setAttribute('title', 'google')
link.removeAttribute('title', 'google')

val = link
console.log(val)
