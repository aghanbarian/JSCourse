// function sayHello() {
//   console.log('Hello Every body')
// }

// const sayHello = () => {
//   console.log('hello world ')
// }

//const sayHello = () => ({ msg: 'say Hello' })

//const sayHello = () => 'Hello Return'

// const sayHello = () => console.log('hello')
const sayHello = (name) => {
  console.log(`Hello ${name}`)
}

// const sayHello = (name, lastname) => {
//   console.log(`hello ${name} ${lastname}`)
// }
// console.log(sayHello('ali', 'ahmadi'))

const users = ['ahmad', 'hasan', 'john', 'andy']

users.forEach((user) => {
  sayHello(user)
})

// const nameLengths = users.map(function (user) {
//   str = ''
//   for (let i = 0; i <= user.length; i++) {
//     str += user.charAt(user.length - i)
//   }
//   return str
// })

//arrow function version
const nameLengths = users.map((user) => {
  str = ''
  for (let i = 0; i <= user.length; i++) {
    str += user.charAt(user.length - i)
  }
  return str
})

console.log(nameLengths)
