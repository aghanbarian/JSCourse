let id = 100

if (id == 100) {
  console.log('Correct')
} else {
  console.log('Incorrect')
}

id = '100'

if (id === 100) {
  console.log('Correct')
} else {
  console.log('Incorrect')
}

id = 101

if (id != 100) {
  console.log('not Correct')
} else {
  console.log('Correct')
}

let nd = 102
if (nd) {
  console.log(`the value of variable is ${nd}`)
} else {
  console.log('the variable is not ddefined')
}

if (id > 100) {
  console.log('the id is correct')
} else {
  console.log('Id is not correct')
}

name = 'steve'
age = 16

if (age > 0 && age <= 12) {
  console.log(`${name} is a child`)
} else if (age >= 13 && age < 19) {
  console.log(`${name} is a teenager`)
} else {
  console.log(`${name} is adult`)
}

if (age < 16 || age > 65) {
  console.log(`${name} can not run in race`)
} else {
  console.log(`${name} is registered for race`)
}

console.log(age >= 13 ? 'Teenager and elder' : `${name} is Child`)
