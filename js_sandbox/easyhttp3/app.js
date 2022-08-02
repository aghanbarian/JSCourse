const http = new EasyHTTP()

// //get users

// http
//   .get('https://jsonplaceholder.typicode.com/users')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))

//User Data
const data = {
  name: 'jogn doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com',
}

// Create Post
// http
//   .post('https://jsonplaceholder.typicode.com/users', data)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error))

// //Update Post
// http
//   .put('https://jsonplaceholder.typicode.com/users/2', data)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error))

//Delete Post
http
  .delete('https://jsonplaceholder.typicode.com/users/2', data)
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
