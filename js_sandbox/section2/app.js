//Get Collection by Classname
let items = document.getElementsByClassName('collection-item')

items = Array.from(items)
items.forEach(function (item) {
  item.style.background = '#AAA'
})
console.log(items)

//get collection by Tag name

items = document.getElementsByTagName('li')

items = Array.from(items)

items.forEach(function (li, index) {
  if (index % 2 == 0) {
    li.style.background = '#ccc'
  } else {
    li.style.background = '#999'
  }
  li.textContent = `${index} New Text`
})
console.log(items)

//get collection by queryselector

items = document.querySelector('ul').getElementsByClassName('collection-item')

items = Array.from(items)

for (let i = 0; i < items.length; i++) {
  items[i].style.color = 'RED'
  items[i].innerHTML =
    'list item <a href="#" class="delete-item secondary-content"><i class="fa fa-remove"></i></a>'
}

console.log(items)

//get elements by querySelectorAll return AN Array

items = document.querySelectorAll('li:nth-child(odd)')

items.forEach(function (li) {
  li.textContent = 'Hello World'
  li.style.background = 'ORANGE'
})

console.log(items)


