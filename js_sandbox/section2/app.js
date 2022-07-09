const from = document.querySelector('form')
const heading = document.querySelector('h5')
const input = document.querySelector('input')

input.addEventListener('keydown', runEvent)
input.addEventListener('keyup', runEvent)
input.addEventListener('keypress', runEvent)
input.addEventListener('focus', runEvent)
input.addEventListener('blur', runEvent)
input.addEventListener('cut', runEvent)
input.addEventListener('paste', runEvent)
input.addEventListener('input', runEvent)
input.addEventListener('change', runEvent)

function runEvent(e) {
  heading.innerText = input.value
  console.log(`EVENT TYPE : ${e.type}`)
}
