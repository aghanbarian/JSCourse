document.querySelector('.get-jokes').addEventListener('click', getJokes)

function getJokes(e) {
  const numberOfJokes = document.querySelector('input[type = "number"]').value

  xhr = new XMLHttpRequest()
  xhr.open('GET', `http://api.icndb.com/jokes/random/${numberOfJokes}`, true)

  xhr.onload = function () {
    if (this.status === 200) {
      const responses = JSON.parse(this.responseText)
      let output = ''

      if (responses.type === 'success') {
        responses.value.forEach(function (response) {
          output += `<li>${response.joke}</li>`
        })
        document.querySelector('.jokes').innerHTML = output
      } else {
        output += '<li>Somthing Goes wrong</li>'
      }
    }
  }

  xhr.send()

  e.preventDefault()
}
