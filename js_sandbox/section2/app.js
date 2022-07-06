let val

val = document
val = document.all
val = document.all[3]

// allArray = Array.from(document.scripts)
// allArray.forEach(function (element) {
//   console.log(element)
// })

val = document.head
val = document.body
val = document.domain
val = document.URL
val = document.characterSet
val = document.contentType

val = document.links
val = document.forms

val = document.images

valArr = Array.from(document.scripts)

valArr.forEach(function (element) {
  console.log(element)
})

console.log(val)
