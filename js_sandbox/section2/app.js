//create element

const li = document.createElement('li')

li.className = 'collection-item'

li.id = 'new-item'

li.setAttribute('title', 'Delete Item')

li.appendChild(document.createTextNode('Hello World'))

// li.innerHTML =
//   li.innerHTML +
//   '<a href="#" class="delete-item secondary-content" ><i class="fa fa-remove"></i></a>'

let link = document.createElement('a')

link.className = 'delete-item secondary-content'
link.innerHTML = "<i class='fa fa-remove'></i>"

li.appendChild(link)

document.querySelector('ul.collection').append(li)
