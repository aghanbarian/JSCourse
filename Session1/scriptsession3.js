hour = 17.5

// if (hour > 17 && hour < 20) {
//   alert('good evening')
// } else if (hour > 20) {
//   alert('good night')
// }

// hour > 18 ? alert('good night') : alert('good day')

// console.log(Math.random())

// console.log(Math.floor(Math.random() * 8))

// let randNumber = Math.floor(Math.random() * 6) + 1
// if (randNumber == 6) {
//   console.log(`you drew  ${randNumber}`)
// } else if (randNumber == 5) {
//   console.log(`you drew  ${randNumber}`)
// } else if (randNumber == 4) {
//   console.log(`you drew  ${randNumber}`)
// } else if (randNumber == 3) {
//   console.log(`you drew  ${randNumber}`)
// } else if (randNumber == 2) {
//   console.log(`you drew  ${randNumber}`)
// } else if (randNumber == 1) {
//   console.log(`you drew  ${randNumber}`)
// }
maxN = 6
minN = 1
let rand = Math.floor(Math.random() * (maxN - minN + 1) + minN)

// console.log(rand)

// switch (rand) {
//   case 1:
//     console.log(`loose ${rand}`)
//     break
//   case 2:
//     console.log(`loose ${rand}`)
//     break
//   case 3:
//     console.log(`loose ${rand}`)
//     break
//   case 4:
//     console.log(`loose ${rand}`)
//     break
//   case 5:
//     console.log(`loose ${rand}`)
//     break
//   case 6:
//     console.log(`You Win ${rand}`)
// }

// switch (rand) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     console.log(`loose ${rand}`)
//     break
//   default: {
//     console.log('you win ' + rand)
//   }
// }

// for (i = 1; i <= 6; i++) {
//   console.log(`log ${i}`)
// }

// let counter = 1
// while (counter <= 5) {
//   console.log(`ahmad ${counter}`)
//   counter++
// }

// counter = 6
// while (counter > 0) {
//   console.log(`ahmad ${counter}`)
//   counter--
// }

console.clear()
counter = 50
do {
  console.log(counter)
  counter -= 10
} while (counter > 0)

let array = [1, 3, 7, 8, 'ali', 2, 3, 3, 'b', 4, 8]
for (let index = 0; index < array.length; index++) {
  const element = array[index]
  console.log(element)
}

for (let i = 9; i > 0; i--) {
  console.log(i)
}

// let colors = new Array('red', 'blue', 'green')
let colors = ['red', 'blue', 'green']
console.log(colors)

let info = ['david', 'johnson', 30, true, 5000]
console.log('====================================')
console.log(info)
info[0] = 'john'
console.log(info)
console.log('====================================')
info[10] = '2020'
console.log(info)
info[2] = 'lovely'
console.log(info)
info[5] = ['1', '2', '4']
console.log(info)

const cars = ['benz', 'pride', 'vanet']
const cars3 = ['benz', 'pride', 'vanet']

cars[0] = '1'
console.log(cars)
console.log(cars.length)

cars2 = cars
console.log(cars == cars2)
console.log(cars3 == cars)
cars[0] = 'han'
console.log(cars)
console.log(cars2)

let [a, b, c] = [4, 5, 6]
console.log(a, b, c)

cars.push('paykan')
console.log(cars)
cars.pop('paykan')
console.log(cars)

console.log(Array.isArray(cars))
console.log(String(cars.join('"')))
