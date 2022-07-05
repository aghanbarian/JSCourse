function greet() {
  // console.log('Hello')
  return 'Hello'
}

console.log(greet())

function hello(name, family) {
  console.log(`Hello ${name}  ${family}`)
}

hello('john', 'Doe')

function welcome(firstName = 'john', lastName = 'doe') {
  console.log(`Hello ${firstName} ${lastName}`)
}

welcome()
welcome('steve', 'small')

const square = function (x = 3) {
  return x * x
}

console.log(square(9))

//-----------
;(function () {
  console.log('Hello from X')
})()
;(function (a, b) {
  console.log(`two number ${a} and ${b}`)
})(10, 12)

const someMethod = {
  add: function () {
    console.log('dont do thid')
  },
  update: function () {
    console.log('update in Level 2')
  },
}

someMethod.delete = function () {
  console.log('in Delete Mode, Are you sue?')
}

someMethod.add()
someMethod.update()
someMethod.delete()
