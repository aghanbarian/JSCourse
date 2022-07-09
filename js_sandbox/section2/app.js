// document.querySelector('.clear-tasks').addEventListener('click', function (e) {
//   console.log('hello world')
//   e.preventDefault()
// })

document.querySelector('.clear-tasks').addEventListener('mouseover', onClick)

function onClick(e) {
  // console.log('Clicked')

  let val

  val = e
  val = e.target
  val = e.target.className
  val = e.target.classList

  e.target.innerText = 'Hello World'

  val = e.type
  val = e.timeStamp

  val = e.clientX
  val = e.clientY

  val = e.offsetX
  val = e.offsetY

  console.log(val)
}
