let name1 = 'jeff'
let name2 = new String('jeff')

console.log(name1)
console.log(name2)

console.log(typeof name1)
console.log(typeof name2)

if (name1 === 'jeff') {
  console.log('YES')
} else {
  console.log('NO')
}

if (name2 === 'jeff') {
  console.log('YES')
} else {
  console.log('NO')
}

if (name2 == 'jeff') {
  console.log('YES')
} else {
  console.log('NO')
}

//Numbers

let num1 = 10
let num2 = new Number(5)

console.log(num1)
console.log(num2)

console.log(typeof num1)
console.log(typeof num2)

//function

const getsum1 = function (x, y) {
  return x + y
}

const getsum2 = new Function('x', 'y', 'return x+y')

console.log(getsum1(10, 20))
console.log(getsum2(2, 7))

//objects
const john = { name: 'john' }

console.log(john)

const john2 = new Object({ name: 'john' })

console.log(john2)

const arr1 = [1, 2, 3, 4]
const arr2 = new Array([1, 2, 3, 4])

console.log(typeof arr1)
console.log(typeof arr2)
