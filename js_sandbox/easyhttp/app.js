const http = new easyHTTP()

//Get Posts

http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {
  if (err) {
    console.log(err)
  } else {
    let pposts = JSON.parse(posts)
    let output = ''
    pposts.forEach(function (post) {
      output += `<li>Title : ${post.title} <br /> Desc : ${post.body}</li>`
    })
    document.getElementById('output').innerHTML = `<ul>${output}</ul>`
  }
})

// posts.forEach(function (post) {
//   output += `<li>Title : ${post.title} <br /> Desc : ${post.body}</li>`
// })

// document.body.innerHTML = output
