const posts = [
  { title: 'Post One', body: 'Body of Post One' },
  { title: 'Post two', body: 'Body of Post tw0' },
]

// function addPost(post) {
//   setTimeout(function () {
//     posts.push(post)
//   }, 2000)
// }

// function getPosts() {
//   setTimeout(function () {
//     let output = ''
//     posts.forEach(function (post) {
//       output += `<li>${post.body}</li>`
//     })
//     document.body.innerHTML = output
//   }, 1000)
// }

// addPost('Post Three', 'Post Three docs')

// getPosts() by callback

function addPost(post, callback) {
  setTimeout(function () {
    posts.push(post)
    callback()
  }, 2000)
}

function getPosts() {
  setTimeout(function () {
    let output = ''
    posts.forEach(function (post) {
      output += `<li>${post.body}</li>`
    })
    document.body.innerHTML = output
  }, 1000)
}

// getPosts() by promise

function addPost(post) {
  return new Promise(function (resolve, reject) {
    let error = false
    setTimeout(function () {
      posts.push(post)
      if (!error) {
        resolve()
      } else {
        reject('Error: somthing goes wrong')
      }
    }, 2000)
  })
}

function getPosts() {
  setTimeout(function () {
    let output = ''
    posts.forEach(function (post) {
      output += `<li>${post.body}</li>`
    })
    document.body.innerHTML = output
  }, 1000)
}

addPost({ title: 'Post Three', body: 'Post Three docs' })
  .then(getPosts)
  .catch(function (err) {
    console.log(err)
  })
