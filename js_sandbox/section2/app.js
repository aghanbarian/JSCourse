const card = document.querySelector('.card')
const heading = document.querySelector('h5')
const clearTask = document.querySelector('.clear-tasks')

// clearTask.addEventListener('click', runEvent)
clearTask.addEventListener('dblclick', runEvent)
clearTask.addEventListener('mousedown', runEvent)
clearTask.addEventListener('mouseup', runEvent)
clearTask.addEventListener('mousemove', runEvent)

card.addEventListener('mousemove', runEvent)

function runEvent(e) {
  console.log(`Event Typed : ${e.type}`)

  heading.innerHTML = `X :  ${e.offsetX} Y: ${e.offsetY}`

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 30)`
}

console.log(card, heading, clearTask)
