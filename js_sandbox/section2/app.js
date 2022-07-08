// documnet. get element by id

console.log(document.getElementById('task-title'))

console.log(document.getElementById('task-title').id)
console.log(document.getElementById('task-title').className)

let anElement

anElement = document.getElementById('task-title')

anElement.style.backgroundColor = '#666'
anElement.style.color = '#FFF'
anElement.style.padding = '2px'
anElement.textContent = 'Task List'
anElement.innerText = 'My Task'
//anElement.innerHTML = '<span style="color:yellow">Task List Span</span>'

anElement = document.querySelector('#task-title')

anElement.style.color = 'RED'

anElement = document.querySelector('.collection-item')

anElement.style.color = 'ORANGE'

anElement = document.querySelector('a')

anElement.style.color = 'GREEN'

anElement = document.querySelector('a')

anElement.style.color = 'GREEN'
anElement = document.querySelector('li')

anElement.style.color = 'RED'

anElement = document.querySelector('ul li')
anElement.style.color = 'brown'

anElement = document.querySelector('li:last-child')
anElement.style.color = 'brown'

anElement = document.querySelector('li:nth-child(3)')
anElement.style.color = 'BLUE'

anElement = document.querySelector('li:nth-child(4)')
anElement.textContent = 'Anothert '

anElement = document.querySelector('li:nth-child(odd)')
anElement.style.background = 'Orange'

anElement = document.querySelector('li:nth-child(even)')
anElement.style.background = '#ccc'
