let val

const list = document.querySelector('ul.collection')
const listitem = document.querySelector('li.collection-item:first-child')

val = listitem
val = list

val = list.childNodes
// val = list.childNodes[0]
// val = list.childNodes[1]

// items = Array.from(list.childNodes)
// items.forEach(function (item) {
//   console.log(item.nodeName)
//   console.log(item.nodeType)
// })

items = Array.from(list.children)
items.forEach(function (item) {
  console.log(item.nodeName)
  console.log(item.nodeType)
  item.textContent = 'Hello World '
  item.style.color = 'RED'
})

val = list.firstChild
val = list.firstElementChild
val = list.lastElementChild

val = list.childElementCount
val = listitem.parentNode.parentNode
val = listitem.parentElement.parentElement

val = listitem.nextElementSibling
val = val.nextElementSibling

val = listitem.previousElementSibling
val = listitem.previousSibling

console.log(val)
