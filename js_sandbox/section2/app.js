// Loops

for (let i = 0; i < 10; i++) {
  console.log(i)
}

for (let j = 0; j < 10; j++) {
  if (j === 2) {
    console.log('Number 2 is my fav')
    continue
  }

  if (j === 5) {
    break
  }
  console.log('number ' + j)
}

let k = 0

while (k < 10) {
  console.log('while number ' + k)
  k++
}

let m = 0

do {
  console.log('do lopp number ' + m)
  m++
} while (m < 7)

const cars = ['ford', 'chevy', 'honda', 'toyota']

for (i = 0; i < cars.length; i++) {
  console.log('Cars ' + i + ' ' + cars[i])
}

cars.forEach(function (c) {
  console.log(c + ' in forEach')
})

const users = [
  { id: 1, name: 'ali' },
  { id: 2, name: 'hasan' },
  { id: 3, name: 'sara' },
  { id: 4, name: 'lyla' },
]

const ids = users.map(function (user) {
  return user.id
})

console.log(ids)

cars.forEach(function (car, index, arr) {
  console.log(`${index} ${car}`)
  console.log('another access to array in foreach ' + arr[index])
})

const person = {
  name: 'ali',
  lastname: 'javad',
  age: 30,
}

for (x in person) {
  console.log(`${x} : ${person[x]}`)
}
