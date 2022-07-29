document.getElementById('button1').addEventListener('click', getText)
document.getElementById('button2').addEventListener('click', getJson)
document.getElementById('button3').addEventListener('click', getExternal)

function getText() {
  fetch('test.txt')
    .then((result) => result.text())
    .then((data) => {
      console.log(data)
      document.getElementById('output').innerHTML = data
    })
    .catch((error) => console.log(error))
}

function getJson() {
  fetch('posts.json')
    .then((result) => result.text())
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
    .catch((error) => console.log(error))
}

function getExternal() {
  fetch('https://api.github.com/users')
    .then((result) => result.text())
    .then((data) => {
      console.log(data)
      output = '<ul>'
      posts = JSON.parse(data)
      posts.forEach(function (post) {
        output += `<li>Title : ${post.login}</li>`
      })
      output += '</ul>'
      document.getElementById('output').innerHTML = output
    })
    .catch((error) => console.log(error))
}
