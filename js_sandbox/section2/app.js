//event bubbling

// document.querySelector('.card-title').addEventListener('click', function (e) {
//   console.log('card-title')
// })

// document.querySelector('.card-content').addEventListener('click', function (e) {
//   console.log('card-content')
// })

// document.querySelector('.card').addEventListener('click', function (e) {
//   console.log('card')
// })

// document.querySelector('.col').addEventListener('click', function (e) {
//   console.log('col')
// })

//event delegation

// const delItem = document.querySelector('.delete-item')

// delItem.addEventListener('click', deleteItem)

document.body.addEventListener('click', deleteItem)

function deleteItem(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    console.log('Delete Item')

    e.target.parentElement.parentElement.remove()
  }
}
