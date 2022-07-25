const http = new easyHTTP()

//Get Posts

// http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {
//   if (err) {
//     console.log(err)
//   } else {
//     let pposts = JSON.parse(posts)
//     let output = ''
//     pposts.forEach(function (post) {
//       output += `<li>ID: ${post.id} <br /> Title : ${post.title} <br /> Desc : ${post.body}</li>`
//     })
//     document.getElementById('output').innerHTML = `<ul>${output}</ul>`
//   }
// })
//get single post

function getPost(numberPost) {
  if (numberPost !== 1) {
    http.get(
      'https://jsonplaceholder.typicode.com/posts',
      function (err, posts) {
        if (err) {
          console.log(err)
        } else {
          let pposts = JSON.parse(posts)
          let output = ''
          pposts.forEach(function (post) {
            output += `<li>ID: ${post.id} <br /> Title : ${post.title} <br /> Desc : ${post.body}</li>`
          })
          document.getElementById('output').innerHTML = `<ul>${output}</ul>`
        }
      }
    )
  } else {
    http.get(
      'https://jsonplaceholder.typicode.com/posts/1',
      function (err, post) {
        let output = ''
        if (err) {
          console.log(err)
        } else {
          let aPost
          aPost = JSON.parse(post)
          console.log(aPost)

          output += `<h1>ID: ${aPost.id} <br /> Title : ${aPost.title} <br /> Desc : ${aPost.body}</h1>`
        }
        document.getElementById('output').innerHTML = `${output}`
      }
    )
  }
}

// getPost(2)

// http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(posts)
//   }
// })

data = { title: 'post by ahmad', body: 'a post frm martian' }

function doPost() {
  http.post(
    'https://jsonplaceholder.typicode.com/posts',
    data,
    function (err, post) {
      if (err) {
        console.log(err)
      } else {
        console.log(post)
      }
    }
  )
}

function doPut(n, data) {
  http.put(
    `https://jsonplaceholder.typicode.com/posts/${n}`,
    data,
    function (err, post) {
      if (err) {
        console.log(err)
      } else {
        console.log(post)
      }
    }
  )
}

function doDelete() {
  http.delete(
    `https://jsonplaceholder.typicode.com/posts/1`,
    function (err, response) {
      if (err) {
        console.log(err)
      } else {
        console.log(response)
      }
    }
  )
}


