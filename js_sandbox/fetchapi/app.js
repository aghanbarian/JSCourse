document.getElementById('button1').addEventListener('click', getText)
document.getElementById('button2').addEventListener('click', getJson)
document.getElementById('button3').addEventListener('click', getExternal)

function getText() {
  fetch('test.txt')
    .then(function (result) {
      return result.text()
      document.getElementById('output').innerHTML = result.text()
    })
    .then(function (data) {
      console.log(data)
      document.getElementById('output').innerHTML = data
    })
    .catch(function (error) {
      console.log(error)
    })
}

function getJson() {
  fetch('posts.json')
    .then(function (result) {
      return result.text()
      document.getElementById('output').innerHTML = result.text()
    })
    .then(function (data) {
      console.log(data)
      output = '<ul>'
      posts = JSON.parse(data)
      posts.forEach(function (post) {
        output += `<li>Title : ${post.title}   Body : ${post.body}</li>`
      })
      output += '</ul>'
      document.getElementById('output').innerHTML = output
    })
    .catch(function (error) {
      console.log(error)
    })
}

function getExternal() {
  fetch('https://api.github.com/users')
    .then(function (result) {
      return result.text()
      document.getElementById('output').innerHTML = result.text()
    })
    .then(function (data) {
      console.log(data)
      output = '<ul>'
      posts = JSON.parse(data)
      posts.forEach(function (post) {
        output += `<li>Title : ${post.login}</li>`
      })
      output += '</ul>'
      document.getElementById('output').innerHTML = output
    })
    .catch(function (error) {
      console.log(error)
    })
}
