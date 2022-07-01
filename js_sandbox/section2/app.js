// console log

console.log('Hello World !')
console.log(12635)
console.log(false)
// var greeting = 'Hello !'
// console.log(greeting)
console.log([1, 4, 5, 6, 8])
console.log({ a: 2, b: 56 })
console.table({ a: 2, b: 56 })
console.error('this is some error')
/* 
multi 
line 
command 
*/
// console.clear()
// console.warn('some warning to you ')
// console.time('Hello')
// console.log(greeting)
// console.log(greeting)
// console.log(greeting)
// console.log(greeting)
// console.log(greeting)
// console.log(greeting)
// console.timeEnd('Hello')

// var let const

var name = 'john Doe'
console.log(name)
name = 'doe smith'
console.log(name)

var greeting
console.log(greeting)
greeting = 'Hello World !'
console.log(greeting)
console.log('type of greeting : ' + typeof greeting)

const a = 100
console.log('type of a : ' + typeof a)
let b = true
console.log('type of b : ' + typeof b)

const person = {
  name: 'ahmad',
  age: 30,
}
console.log('type of person : ' + typeof person)

let n = null
console.log('type of null : ' + typeof null)

let u
console.log('type of u : ' + typeof u)

let sym = Symbol()

console.log('type of sym : ' + typeof sym)

person.name = 'sara'
person.age = 32
console.log(person)

console.log('type of Person : ' + typeof person)

const numbers = [1, 2, 3, 4, 5, 6, 7]
console.log('type of numbers : ' + typeof numbers)
numbers[3] = 10
numbers.push(8)
console.log(numbers)

let today = new Date()
console.log(today)
console.log('type of today : ' + typeof today)

// Type conversion

let val

val = 5

console.log(val)
console.log(typeof val)
console.log(val.length)

val = String(555)

console.log(val)
console.log(typeof val)
console.log(val.length)

val = String(4 + 9)

console.log(val)
console.log(typeof val)
console.log(val.length)

val = String(true)

console.log(val)
console.log(typeof val)
console.log(val.length)

val = String(Date())

console.log(val)
console.log(typeof val)
console.log(val.length)

val = String([1, 2, 3, 4])

console.log(val)
console.log(typeof val)
console.log(val.length)

val = (5).toString()
val = true.toString()

val = Number('5')
val = Number(true)
val = Number(false)
val = Number(null)
val = Number('5')
val = Number('hi')
val = Number([1, 2, 4, 5])
val = parseInt(100.35)
val = parseFloat(100.35)

console.log(val)
console.log(typeof val)
console.log(val.length)
console.log(val.toFixed(2))

let val1 = 5
let val2 = 6
let sum = val1 + val2
console.log(val1, val2, sum)
console.log(typeof sum)

val1 = '5'
val2 = 6
sum = val1 + val2
console.log(val1, val2, sum)
console.log(typeof sum)

sum = Number(val1) + Number(val2)
console.log(val1, val2, sum)
console.log(typeof sum)

val = Math.PI
val = Math.E
val = Math.round(10.6)
val = Math.ceil(10.6)
val = Math.floor(28.6)
val = Math.sqrt(256)
val = Math.abs(-5)
val = Math.pow(8, 2)
val = Math.min(3, 7, 23, 8, 10)
val = Math.max(3, 7, 23, 8, 10)
val = Math.random(4) * 4

val = Math.floor(Math.random() * 20 + 1)
console.log(val)
